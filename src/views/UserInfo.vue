<template>
  <div class="userinfo">
    <nav-bar :user_img="model.user_img"></nav-bar>
    <img src="@/assets/bannerTop.png" alt="" />
    <user-detail :userinfo="model"></user-detail>
    <hr />
  </div>
</template>

<script>
import NavBar from "components/common/NavBar"
import UserDetail from "components/userComponent/UserDetail"
export default {
  name: "UserInfo",
  data() {
    return {
      model: {}
    }
  },
  created() {
    this.userInfoData()
  },
  methods: {
    async userInfoData() {
      const res = await this.$http.get("/user/" + localStorage.getItem("id"))
      // console.log(res)
      this.model = res.data[0]
    }
  },
  components: {
    NavBar,
    UserDetail
  }
}
</script>

<style lang="scss" scoped>
.userinfo {
  img {
    height: 91px;
    width: 100%;
  }
  hr {
    margin: 0;
  }
}
</style>
