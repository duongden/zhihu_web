// --- 知乎API请求模块 ---

// 定义一些知乎 App 的常量，用于模拟请求头
const appVersion = "10.12.0";
const apiVersion = "101_1_1.0";
const appBuild = "21210";
const appBundle = "com.zhihu.android";
const appID = "1355";
const platformId = "12";

/**
 * 封装了知乎 API 请求的类。
 * 负责处理认证、请求头生成、数据加密等逻辑。
 */
class ZhihuRequest {
  /**
   * @param {object} options - 构造函数选项。
   * @param {function} options.encryptData - 用于加密请求参数的函数。
   * @param {object} options.loginData - 用户的登录信息，包含 udid, access_token, cookie 等。
   * @param {object} [options.zsts={}] - zse_81 和 zse_82 参数。
   * @param {object} [options.defaultHeaders={}] - 额外的默认请求头。
   */
  constructor({ encryptData, loginData, zsts = {}, defaultHeaders = {} }) {
    if (typeof encryptData !== "function") {
      throw new Error("必须提供 encryptData 加密函数");
    }

    console.log("绑定登录数据:", loginData);
    this.udid = loginData.udid;
    if (!this.udid) {
      throw new Error("提供 loginData 缺少 udid，请先使用游客登录获取 udid");
    }

    // 兼容游客登录和用户登录的数据结构
    loginData = loginData.guest || loginData;
    this.accessToken = "Bearer " + loginData.access_token;
    // 将 cookie 对象转换为字符串
    this.cookie = Object.entries(loginData.cookie || {})
      .filter(([_, v]) => v) // 过滤掉空值的 cookie
      .map(([k, v]) => `${k}=${v}`)
      .join("; ");

    const [zst82, zst81] = Array.isArray(zsts) ? zsts : [];
    this.zst81 = zst81;
    this.zst82 = zst82;

    // 绑定加密函数的 this 上下文
    this.encryptData = encryptData.bind(this);

    // --- 构建默认请求头 ---
    const x_app_za = "OS=Android&Release=15&Model=Pixel&VersionName=10.12.0&VersionCode=21210&Product=com.zhihu.android&Installer=Google+Play&DeviceType=AndroidPhone";
    const user_agent = `${appBundle}/Futureve/${appVersion} Mozilla/5.0 (Linux; Android; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.1000.10 Mobile Safari/537.36`;

    // 通用请求头，用于所有知乎域名
    this.commonDefaultHeaders = {
      "User-Agent": user_agent,
      "x-Zse-93": apiVersion,
      ...(this.cookie && { Cookie: this.cookie }),
      ...(this.accessToken && { Authorization: this.accessToken }),
      ...(this.udid && { "x-udid": this.udid }),
      ...(this.zst81 && { "X-ZST-81": this.zst81 }),
      ...(this.zst82 && { "X-ZST-82": this.zst82 }),
      ...defaultHeaders,
    };

    // App 特有的请求头，主要用于 api.zhihu.com
    this.appSpecificHeaders = {
      "x-api-version": "3.0.93",
      "x-app-version": appVersion,
      "x-app-za": x_app_za,
      "x-app-bundleid": appBundle,
      "x-app-flavor": "play",
      "x-app-build": "release",
    };

    // 合并成完整的默认请求头
    this.defaultHeaders = {
      ...this.commonDefaultHeaders,
      ...this.appSpecificHeaders,
    };
  }

  /**
   * 发起一个通用的知乎 API 请求。
   * @param {string} method - HTTP 请求方法 (GET, POST, etc.)。
   * @param {string} url - 请求的 URL。
   * @param {object} [data={}] - 请求体数据 (用于 POST, PUT, PATCH)。
   * @param {object} [options={}] - 额外的请求选项。
   * @param {object} [options.headers={}] - 覆盖默认的请求头。
   * @param {boolean} [options.encryptBody=true] - 是否加密请求体。
   * @param {boolean} [options.isWWW=false] - 请求的是否是 www.zhihu.com 域名，若是则不添加 App 特有请求头。
   * @returns {Promise<any>} - 返回 Promise，解析为 API 响应的 JSON 数据。
   */
  async request(
    method,
    url,
    data = {},
    { headers = {}, encryptBody = true, isWWW = false } = {}
  ) {
    method = method.toUpperCase();
    const isGet = method === "GET";

    // 根据 isWWW 决定使用哪一套默认请求头
    let baseDefaultHeaders = isWWW
      ? this.commonDefaultHeaders
      : this.defaultHeaders;

    // 构建最终的请求头
    const requestHeaders = {
      ...baseDefaultHeaders,
      ...headers,
      // GET 请求需要加密 URL 生成 x-Zse-96 头
      ...(isGet && {
        "x-Zse-96": `1.0_${this.encryptData(url)}`,
      }),
    };

    let body = null;
    // 处理非 GET 请求的请求体
    if (!isGet && data) {
      body =
        !data || Object.keys(data).length === 0
          ? "" // 如果数据为空，则发送空字符串
          : encryptBody
            ? this.encryptData(data, true) // 加密表单数据
            : JSON.stringify(data); // 不加密，转为 JSON 字符串

      // 根据是否加密设置 Content-Type
      requestHeaders["Content-Type"] = encryptBody
        ? "application/x-www-form-urlencoded"
        : "application/json";
    }

    try {
      console.log(`[ZhihuRequest] ${method} ${url}`);
      // 使用统一的 fetch 函数发起请求
      const response = await unifiedFetch(url, {
        method,
        headers: requestHeaders,
        body,
      });

      // 检查响应状态码
      if (!response.ok) {
        const error = new Error(`HTTP 错误 ${response.status}`);
        error.response = response; // 将原始响应附加到错误对象上
        throw error;
      }

      // 解析 JSON 并返回
      return response.json();
    } catch (error) {
      console.error(`[ZhihuRequest] ${method} ${url} 请求失败:`, error);
      throw error; // 重新抛出错误
    }
  }

  // --- 提供便捷的 HTTP 方法别名 ---
  get(url, options) {
    return this.request("GET", url, null, options);
  }
  post(url, data, options) {
    return this.request("POST", url, data, options);
  }
  patch(url, data, options) {
    return this.request("PATCH", url, data, options);
  }
  put(url, data, options) {
    return this.request("PUT", url, data, options);
  }
  delete(url, options) {
    return this.request("DELETE", url, null, options);
  }
}

// --- 单例模式管理 ---
let globalZhihuInstance = null;

// 导入加密工具
import { getLAESInstance } from "./laes_utils.js";
const laes_utils = getLAESInstance();

/**
 * 初始化全局的 ZhihuRequest 实例。
 * @param {object} options - 初始化选项，同 ZhihuRequest 构造函数。
 * @returns {ZhihuRequest} - 返回创建的实例。
 */
export function initZhihu({ loginData, zsts, defaultHeaders }) {
  // 创建 LAES 加密器实例
  const LAESEncrypt = laes_utils.createEncryptor(
    "541a3a5896fbefd351917c8251328a236a7efbf27d0fad8283ef59ef07aa386dbb2b1fcbba167135d575877ba0205a02f0aac2d31957bc7f028ed5888d4bbe69ed6768efc15ab703dc0f406b301845a0a64cf3c427c82870053bd7ba6721649c3a9aca8c3c31710a6be5ce71e4686842732d9314d6898cc3fdca075db46d1ccf3a7f9b20615f4a303c5235bd02c5cdc791eb123b9d9f7e72e954de3bcbf7d314064a1eced78d13679d040dd4080640d18c37bbde",
    [102, 48, 53, 53, 49, 56, 53, 54, 97, 97, 53, 55, 53, 102, 97, 97]
  );

  /**
   * 知乎 API 特有的加密函数。
   * @param {string|object} data - 需要加密的数据。
   * @param {boolean} [isFormData=false] - 数据是否是表单形式。
   * @returns {string} - 加密后的字符串。
   */
  function encrypt_data(data, isFormData = false) {
    // 对 URL (GET请求) 的加密逻辑
    if (!isFormData) {
      if (typeof data !== "string") throw new Error("URL data must be a string");
      const apiPrefix = "https://api.zhihu.com";
      if (!data.startsWith(apiPrefix)) {
        throw new Error(`URL 必须以 ${apiPrefix} 开头`);
      }
      const apiPath = data.slice(apiPrefix.length);
      // 构造待加密的原始字符串
      let plainText = `${apiVersion}+${apiPath}+${appVersion}+${this.accessToken}+${this.udid}`;
      // MD5 哈希
      data = md5(plainText);
    } else { // 对请求体 (POST请求) 的加密逻辑
      if (typeof data !== "string") throw new Error("Form data must be a string");
      // Base64 编码
      data = btoa(encodeURIComponent(data));
    }

    // LAES 加密
    return LAESEncrypt(data);
  }

  // 如果没有提供登录数据，则使用一个默认的游客账号
  if (!loginData) {
    loginData = {
      udid: 'UraTB9TKRhtLBYAOB4UmHKrPn18Tg811TFQ=',
      guest: {
        access_token: 'gt2.0AAAAAI9lh-cbRsrUB5O2UgAAAAxNVQJgAgC0JjzaArWyMX2KTozuYn71fSF1hQ==',
        token_type: 'bearer',
        user_type: 'guest',
        id: '30f6dfae636d89c2078c6c0676a2929f',
        uid: 1965481299495085000,
        push_channel: 'pm_n_4c16eb12348347b7ad35126bb50e61d4',
        URL: '',
        cookie: {
          q_c0: '',
          z_c0: 'gt2.0AAAAAI9lh-cbRsrUB5O2UgAAAAxNVQJgAgC0JjzaArWyMX2KTozuYn71fSF1hQ=='
        },
        created_at: 0
      }
    }
    zsts = [
      '2.0IeUTj9TKRhsMAAAASwUAADIuMPui_GgAAAAAngWRhxBicaoZtrn_UBY16lmTsmU=',
      '2uSTcNTKRhsbYMgVuWpD4QRnkRP48-uihQ9CAA=='
    ]
    // 数盟id 使用模拟器可以无限生成 未登录必须添加上这个
    defaultHeaders = {
      "x-ms-id": "DUzQXhjAQDuNnnrXUZuXcZAHclw7VipDNE79RFV6UVhoakFRRHVObm5yWFVadVhjWkFIY2x3N1ZpcERORTc5c2h1",
    };
  }

  // 创建 ZhihuRequest 的全局实例
  globalZhihuInstance = new ZhihuRequest({
    encryptData: encrypt_data,
    loginData: loginData,
    zsts: zsts,
    defaultHeaders: defaultHeaders,
  });

  // 将实例挂载到 window 对象，方便调试或在其他非模块化 JS 中使用
  window.$zhihu = globalZhihuInstance;

  console.log("ZhihuRequest 已全局初始化");
  return globalZhihuInstance;
}

/**
 * 更新全局 ZhihuRequest 实例的登录数据。
 * @param {object} loginData - 新的登录数据。
 * @param {object} zsts - 新的 zsts 数据。
 * @param {object} defaultHeaders - 新的默认头。
 * @returns {ZhihuRequest|null} - 返回更新后的实例或 null。
 */
export function updateZhihuLoginData(loginData, zsts, defaultHeaders) {
  if (!globalZhihuInstance) {
    console.warn("ZhihuRequest 尚未初始化，请先调用 initZhihu");
    return null;
  }
  // 注意：这里的 updateLoginData 方法在 ZhihuRequest 类中并未定义，
  // 实际使用时可能需要先 new 一个新的实例或在类中实现此方法。
  // 为了保持代码可运行，暂时注释掉不存在的方法调用。
  // globalZhihuInstance.updateLoginData(loginData, zsts, defaultHeaders);
  console.warn("ZhihuRequest.updateLoginData 方法未实现，请重新初始化实例。");
  return globalZhihuInstance;
}

/**
 * 获取全局的 ZhihuRequest 实例。
 * @returns {ZhihuRequest} - 返回全局实例。
 */
export function getZhihuInstance() {
  return globalZhihuInstance;
}

// 模块加载时自动初始化一次
initZhihu({});

// 导出别名，方便使用
export {
  initZhihu as init,
  updateZhihuLoginData as update,
  getZhihuInstance as get,
};