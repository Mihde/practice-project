import Vue from "vue";

//初始化浏览器 初始化html标签的基础样式 我们也可以用
//normalize.css 他是一个非常知名的一个css库 他是来用初始化html标签的基础样式的
//比如说我们很多html标签在不同的浏览器里面显示的效果不一样 然后为了让他们效果一样
//我们可以引入normalize.css这个文件 这样的话在所有浏览器效果都是一样的了 基础样式
import "normalize.css/normalize.css"; // A modern alternative to CSS resets

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
//引入语言包
import locale from "element-ui/lib/locale/lang/en"; // lang i18n

import "@/styles/index.scss"; // global css

import App from "./App";
import store from "./store";
import router from "./router";

import "@/icons"; // icon
// 权限验证
import "@/permission"; // permission control

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
// 做假数据的
import { mockXHR } from "../mock";
if (process.env.NODE_ENV === "production") {
  mockXHR();
}

// set ElementUI lang to EN
Vue.use(ElementUI, { locale });
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
