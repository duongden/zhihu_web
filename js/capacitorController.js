/**
 * 设置移动应用状态栏的样式。
 * 仅在 Capacitor 环境下生效。
 * @param {'DARK' | 'LIGHT' | 'DEFAULT'} color - 状态栏的样式，'DARK' 表示深色文本，'LIGHT' 表示浅色文本。
 */
function setStatusBar(color) {
  // 检查 Capacitor 全局对象是否存在，判断是否在 Capacitor 环境中
  if (typeof Capacitor != "undefined") {
    // 调用 Capacitor 的状态栏插件来设置样式
    window.Capacitor.Plugins.StatusBar.setStyle({ style: color });
  } else {
    // 如果不在 Capacitor 环境，则打印日志，不做任何操作
    console.log("没有Capacitor环境,跳过设置StatusBar");
  }
}

/**
 * 检查 Capacitor 原生 HTTP 插件是否可用。
 * @returns {boolean} 如果插件可用，返回 true；否则返回 false。
 */
function hasNativeHttp() {
  try {
    // 通过检查 CapacitorHttp 插件的 get 方法是否存在来判断插件是否可用
    return !!(
      window.Capacitor &&
      window.Capacitor.Plugins &&
      typeof window.Capacitor.Plugins.CapacitorHttp?.get === "function"
    );
  } catch {
    // 发生任何异常都认为插件不可用
    return false;
  }
}

/**
 * 一个封装了 Capacitor 原生 GET 请求和 Web fetch API 的函数。
 * 优先使用 Capacitor 的原生 HTTP GET 请求，如果环境不支持，则回退到标准的 Web fetch API。
 * @param {string} url - 请求的 URL。
 * @param {object} options - 请求配置对象。
 * @param {object} [options.headers={}] - 请求头。
 * @param {object} [options.params={}] - URL 查询参数。
 * @param {object} [options.rest] - 其他传递给 CapacitorHttp.get 的参数，如 connectTimeout, readTimeout。
 * @returns {Promise<Response>} 返回一个 Promise，其解析值为一个标准的 Response 对象。
 */
async function nativeGet(url, { headers = {}, params = {}, ...rest } = {}) {
  // 检查是否支持原生 HTTP
  if (hasNativeHttp()) {
    const { CapacitorHttp } = window.Capacitor.Plugins;
    // 使用 Capacitor 原生 HTTP 插件发起 GET 请求
    const res = await CapacitorHttp.get({
      url,
      headers,
      params,
      ...rest, // 可包含 connectTimeout, readTimeout, responseType 等
    });
    // Capacitor 插件可能会自动解析 JSON，但 Response 对象需要字符串或 Buffer。
    // 因此，如果返回的是对象，我们将其字符串化。
    const body =
      typeof res.data === "object" && res.data !== null
        ? JSON.stringify(res.data)
        : res.data;
    // 将 Capacitor 的响应结果包装成一个标准的 Response 对象并返回
    return new Response(body, {
      status: res.status,
      headers: new Headers(res.headers || {}),
    });
  }

  // Web 环境回退逻辑
  const usp = new URLSearchParams();
  // 将 params 对象转换为 URL 查询字符串
  Object.entries(params).forEach(([k, v]) => {
    if (v !== undefined && v !== null) usp.append(k, String(v));
  });
  // 将生成的查询字符串附加到 URL 后面
  const fullUrl = usp.toString()
    ? `${url}${url.includes("?") ? "&" : "?"}${usp.toString()}`
    : url;

  // 使用标准的 fetch API 发起 GET 请求，并直接返回 Response 对象
  return fetch(fullUrl, { method: "GET", headers });
}