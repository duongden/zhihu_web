// unified-http.js
// 该文件旨在提供一个统一的网络请求接口，自动判断当前环境（Capacitor、油猴脚本、普通浏览器）并选择最优的请求方式。

/**
 * 将一个对象转换为 URL 查询字符串。
 * @param {object} params - 需要转换的键值对对象。
 * @returns {string} 生成的查询字符串，例如 "key1=value1&key2=value2"。
 */
function buildQueryString(params) {
  if (!params || Object.keys(params).length === 0) return "";
  const esc = encodeURIComponent;
  return Object.keys(params)
    .map((k) => esc(k) + "=" + esc(params[k]))
    .join("&");
}

/**
 * 解析 GM_xmlhttpRequest 返回的原始头字符串为键值对对象。
 * @param {string} headerStr - GM_xmlhttpRequest 返回的 responseHeaders 字符串。
 * @returns {object} 解析后的头对象，键为小写。
 */
function parseResponseHeaders(headerStr) {
  const headers = {};
  if (!headerStr) return headers;
  const headerPairs = headerStr.trim().split(/\r?\n/);
  for (const pair of headerPairs) {
    const [key, ...valueParts] = pair.split(": ");
    if (key && valueParts.length > 0) {
      headers[key.toLowerCase()] = valueParts.join(": ");
    }
  }
  return headers;
}

/**
 * 使用油猴/暴力猴的 GM_xmlhttpRequest API 发起网络请求。
 * 这种方式可以跨域，并且可以控制更多底层细节。
 * @param {string} url - 请求的 URL。
 * @param {object} options - 请求选项，类似 fetch 的 init 对象。
 * @returns {Promise<Response>} 返回一个 Promise，解析为标准的 Response 对象。
 */
async function unifiedFetchForBrowserUnderGM(url, options = {}) {
  const { method = "GET", headers = {}, body = null } = options;

  return new Promise((resolve, reject) => {
    try {
      // 复制 headers，防止修改原始对象
      let gmHeaders = { ...headers };
      // GM_xmlhttpRequest 对 cookie 有单独的参数处理
      let gmCookie = null;
      if (gmHeaders.cookie !== undefined) {
        gmCookie = gmHeaders.cookie;
        delete gmHeaders.cookie;
      }

      // 如果是 GET 或 HEAD 请求，将 params 拼接到 URL 上
      let finalUrl = url;
      if (options.params && (method === "GET" || method === "HEAD")) {
        const queryString = buildQueryString(options.params);
        if (queryString) {
          finalUrl += (finalUrl.includes("?") ? "&" : "?") + queryString;
        }
      }

      // 构建 GM_xmlhttpRequest 的配置对象
      const gmOptions = {
        method: method.toUpperCase(),
        url: finalUrl,
        headers: gmHeaders,
        data: body, // POST 请求的数据
        cookie: gmCookie,
        anonymous: true, // 不发送 cookie，除非特别指定
        // 请求成功回调
        onload(response) {
          // 将 GM 返回的头字符串转换为对象
          const responseHeadersObj = parseResponseHeaders(
            response.responseHeaders
          );
          // 模拟标准的 Response 对象
          const fetchResponse = new Response(response.responseText, {
            status: response.status,
            statusText: response.statusText,
            headers: new Headers(responseHeadersObj),
          });
          resolve(fetchResponse);
        },
        // 请求失败回调
        onerror(error) {
          console.error(`[GM/TM] ${method} ${url} 请求失败:`, error);
          reject(new TypeError("Failed to fetch"));
        },
        // 请求超时回调
        ontimeout() {
          console.error(`[GM/TM] ${method} ${url} 请求超时`);
          reject(new TypeError("Network request failed"));
        },
      };

      // 发起请求
      window.GM_xmlhttpRequest(gmOptions);
    } catch (error) {
      console.error(`[GM/TM] ${method} ${url} 调用异常:`, error);
      reject(new TypeError("Failed to fetch"));
    }
  });
}

/**
 * 使用 Capacitor 的原生 HTTP 插件发起网络请求。
 * 在移动应用环境中，这可以提供更好的性能和网络能力。
 * @param {string} url - 请求的 URL。
 * @param {object} options - 请求选项，类似 fetch 的 init 对象。
 * @returns {Promise<Response>} 返回一个 Promise，解析为标准的 Response 对象。
 */
async function unifiedFetchForCapacitor(url, options = {}) {
  // 检查 Capacitor HTTP 插件是否可用
  if (!window.Capacitor.Plugins.CapacitorHttp.request) {
    throw new Error("[UnifiedHttp] Capacitor HTTP plugin 未初始化");
  }

  const {
    method = "GET",
    headers = {},
    body = null,
    params = {},
    connectTimeout = 10000, // 连接超时
    readTimeout = 10000, // 读取超时
  } = options;

  // 将 params 拼接到 URL 上
  let finalUrl = url;
  if (params && Object.keys(params).length > 0) {
    const queryString = buildQueryString(params);
    if (queryString) {
      finalUrl += (finalUrl.includes("?") ? "&" : "?") + queryString;
    }
  }

  // 构建 Capacitor HTTP 插件的配置对象
  const capacitorOptions = {
    url: finalUrl,
    method: method.toUpperCase(),
    headers: headers,
    connectTimeout: connectTimeout,
    readTimeout: readTimeout,
  };

  // 如果有请求体，添加到配置中
  if (body !== null && body !== undefined) {
    capacitorOptions.data = body;
  }

  try {
    // 调用原生插件发起请求
    const response = await window.Capacitor.Plugins.CapacitorHttp.request(
      capacitorOptions
    );
    // Capacitor 插件可能会自动解析 JSON，但 Response 对象需要字符串或 Buffer。
    // 因此，如果返回的是对象，我们将其字符串化。
    const responseBody =
      typeof response.data === "object" && response.data !== null
        ? JSON.stringify(response.data)
        : response.data;
    // 模拟标准的 Response 对象
    const fetchResponse = new Response(responseBody, {
      status: response.status,
      statusText: response.status.toString(),
      headers: new Headers(response.headers || {}),
    });
    return fetchResponse;
  } catch (error) {
    console.error(`[Capacitor] ${method} ${url} 请求异常:`, error);
    // 对网络错误和超时进行归一化处理
    if (
      error.message &&
      (error.message.includes("Network") || error.message.includes("timeout"))
    ) {
      return Promise.reject(new TypeError("Failed to fetch"));
    } else {
      return Promise.reject(
        new Error(`Capacitor HTTP Error: ${error.message}`)
      );
    }
  }
}

/**
 * 统一的 fetch 函数，作为模块的主导出。
 * 它会自动检测环境并选择合适的请求方式。
 * @param {Request|string} input - Request 对象或 URL 字符串。
 * @param {object} init - fetch 的标准 init 配置对象。
 * @returns {Promise<Response>} 返回一个 Promise，解析为标准的 Response 对象。
 */
export async function unifiedFetch(input, init = {}) {
  let url;
  let options = init;

  // 处理 input 是 Request 对象的场景
  if (input instanceof Request) {
    url = input.url;
    options = {
      method: input.method,
      headers: new Headers(input.headers),
      body: input.body,
      ...init,
    };
  } else {
    url = String(input);
  }

  // 统一将方法名转为大写
  if (options.method) {
    options.method = options.method.toUpperCase();
  }

  // 环境判断和策略分发
  if (typeof Capacitor !== "undefined") {
    console.log("[UnifiedFetch] 使用 Capacitor 原生 HTTP");
    return unifiedFetchForCapacitor(url, options);
  } else if (typeof window.GM_xmlhttpRequest === "function") {
    console.log("[UnifiedFetch] 使用 GM/Tampermonkey XMLHttpRequest");
    return unifiedFetchForBrowserUnderGM(url, options);
  } else {
    // 如果两者都不可用，则弹出提示并抛出错误
    alert(
      "请前往https://greasyfork.org/scripts/508709 安装脚本后使用 (中国大陆可能无法访问)"
    );
    throw new Error(
      "[UnifiedFetch] 未找到 Capacitor 或 GM/Tampermonkey 环境"
    );
    // 这里的 fetch 调用实际上不会执行，因为前面已经抛出错误
    return fetch(input, init);
  }
}

// 将 unifiedFetch 挂载到 window 对象，方便在其他地方直接调用
window.unifiedFetch = unifiedFetch;