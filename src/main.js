import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import Vant from "vant"
import "vant/lib/index.css"
import http from "./axios/http.js"
import { Toast } from "vant"

Vue.prototype.$tip = Toast
Vue.use(Vant)
Vue.prototype.$http = http

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
