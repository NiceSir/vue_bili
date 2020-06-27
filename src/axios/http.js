import axios from "axios"
import router from "@/router/"
import Vue from "vue"

const http = axios.create({
  baseURL: "/api"
})

http.interceptors.request.use(
  function(config) {
    console.log(config)
    if (localStorage.getItem("id") && localStorage.getItem("token")) {
      config.headers.Authorization = "Bearer " + localStorage.getItem("token")
    }
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  function(res) {
    return res
  },
  function(error) {
    if (error.response.status == 401 || error.response.status == 402) {
      router.push("/login")
      Vue.prototype.$tip.fail(error.response.data.message)
    }
    return Promise.reject(error)
  }
)

export default http
