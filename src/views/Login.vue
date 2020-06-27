<template>
  <div>
    <login-top middleTop="登录bilibili">
      <div
        slot="right"
        style="font-size:3.611vw;"
        @click="$router.push('/register')"
      >
        用户注册
      </div>
    </login-top>
    <login-text
      label="账号"
      placeholder="请输入账号"
      style="margin:4.167vw 0"
      @inputChange="content => (model.username = content)"
    ></login-text>
    <login-text
      label="密码"
      placeholder="请输入密码"
      type="password"
      rule="^.{6,16}$"
      @inputChange="content => (model.password = content)"
    ></login-text>
    <login-btn btntext="登录" @loginSubmit="loginSubmit"></login-btn>
  </div>
</template>

<script>
import LoginTop from "components/common/LoginTop"
import LoginText from "components/common/LoginText"
import LoginBtn from "components/common/LoginBtn"
export default {
  name: "Login",
  data() {
    return {
      model: {
        username: "",
        password: ""
      }
    }
  },
  components: {
    LoginTop,
    LoginText,
    LoginBtn
  },
  methods: {
    async loginSubmit() {
      // console.log("111")
      if (this.model.username && this.model.password) {
        const res = await this.$http.post("/login", this.model)
        this.$tip.fail(res.data.msg)
        // console.log(res)
        if (typeof res.data.id == "undefined") {
          console.log("登录失败")
        } else {
          localStorage.setItem("id", res.data.id)
          localStorage.setItem("token", res.data.token)
          setTimeout(() => {
            this.$router.push("/userinfo")
          }, 1000)
        }
      } else {
        this.$tip.fail("请正确输入")
      }
    }
  }
}
</script>

<style></style>
