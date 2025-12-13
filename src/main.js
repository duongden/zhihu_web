if (!typeof GM_xmlhttpRequest === 'function') {
    alert('未检测到油猴（Tampermonkey环境！');
    window.location.href = 'https://greasyfork.org/scripts/508709';
}

import { createApp } from 'vue'
import "./md5.min.js"
import 'sober' //引入所有组件
import './style.css'
import App from './App.vue'

import router from './router'

import http, {
    init,
    get,
    update
} from '@/api/http.js';
init({})
window.$http = http;
window.$zhihu = get();

createApp(App).use(router).mount('#app')
