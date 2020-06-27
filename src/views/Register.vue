<template>
  <div>
    <login-top middleTop="注册bilibili">
      <div
        slot="right"
        style="font-size:3.611vw;"
        @click="$router.push('/login')"
      >
        切换至登录
      </div>
    </login-top>
    <login-text
      label="姓名"
      style="margin:4.167vw 0"
      placeholder="请输入姓名"
      rule="^.{6,16}$"
      @inputChange="content => (model.name = content)"
    ></login-text>
    <login-text
      label="账号"
      placeholder="请输入账号"
      rule="^.{6,16}$"
      @inputChange="content => (model.username = content)"
    ></login-text>
    <login-text
      label="密码"
      placeholder="请输入密码"
      type="password"
      rule="^.{6,16}$"
      @inputChange="content => (model.password = content)"
    ></login-text>
    <login-btn btntext="注册" @loginSubmit="loginSubmit"></login-btn>
  </div>
</template>

<script>
import LoginTop from "components/common/LoginTop"
import LoginText from "components/common/LoginText"
import LoginBtn from "components/common/LoginBtn"
export default {
  name: "Register",
  data() {
    return {
      model: {
        name: "",
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
      if (this.model.name && this.model.username && this.model.password) {
        const res = await this.$http.post("/register", this.model)

        this.$tip.fail(res.data.msg)
        console.log(res)
        if (typeof res.data.id == "undefined") {
          console.log("失败了")
        } else {
          //保存token和id
          localStorage.setItem("id", res.data.id)
          localStorage.setItem("token", res.data.objtoken)
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
