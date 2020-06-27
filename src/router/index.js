import Vue from "vue"
import VueRouter from "vue-router"
// import Home from "../views/Home.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("views/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("views/Register.vue")
  },
  {
    path: "/userinfo",
    name: "UserInfo",
    component: () => import("views/UserInfo.vue"),
    meta: {
      isToken: true
    }
  },
  {
    path: "/edit",
    name: "Edit",
    component: () => import("../views/Edit.vue"),
    meta: {
      isToken: true
    }
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("views/Home.vue"),
    meta: {
      isToken: true
    }
  },
  {
    path: "/article/:id",
    name: "Article",
    component: () => import("views/Article"),
    meta: {
      isToken: true
    }
  }
]

const router = new VueRouter({
  routes
})

/* eslint-disable */
router.beforeEach((to, from, next) => {
  if (
    (!localStorage.getItem("id") || !localStorage.getItem("token")) &&
    to.meta.isToken == true
  ) {
    // next("/login")
    router.push("/login")
    Vue.prototype.$tip.fail("请重新登录")
    return
  }
  next()
})

export default router
