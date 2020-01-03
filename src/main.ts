import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import antd from "ant-design-vue";
import "ant-design-vue/dist/antd.min.css";
import $ from "jquery";
Vue.config.productionTip = false;
Vue.use(antd);
// Vue.use($);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
