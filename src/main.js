import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import 'bootstrap/scss/bootstrap.scss'

import router from './router'

try {
  window.Popper = require('popper.js').default;
  window.$ = window.jQuery = require('jquery');
  require('bootstrap');
} catch (e) {console.log(e)}

Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
