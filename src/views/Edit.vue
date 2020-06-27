<template>
  <div>
    <nav-bar style="margin-bottom:20px;" :user_img="model.user_img"></nav-bar>
    <div class="edit-header">
      <van-uploader
        class="upload"
        preview-size="100vw"
        :after-read="afterRead"
      />
      <edit-banner editMsg="头像">
        <div slot="right">
          <img :src="model.user_img" alt="" v-if="model.user_img" />
          <img src="@/assets/default_img.jpg" alt="" v-else />
        </div>
      </edit-banner>
    </div>

    <edit-banner editMsg="昵称" @sendEdit="getEdit">
      <div slot="right">{{ model.username }}</div>
    </edit-banner>
    <edit-banner editMsg="UID">
      <div slot="right">
        {{ model.id }}
      </div>
    </edit-banner>
    <edit-banner editMsg="性别" @sendEdit="gendershow = true">
      <div slot="right">
        {{ model.gender }}
      </div>
    </edit-banner>
    <edit-banner editMsg="个性签名" @sendEdit="getEdit">
      <div slot="right">
        {{ model.user_desc }}
      </div>
    </edit-banner>

    <div class="edit-back" @click="$router.push('/userinfo')">返回个人信息</div>
    <div class="user-back" @click="userOut">退出登录</div>

    <van-dialog
      v-model="show"
      :title="title"
      show-cancel-button
      @confirm="confirmDialog"
    >
      <van-field @input="val => (text = val)" autofocus />
    </van-dialog>

    <van-action-sheet
      v-model="gendershow"
      :actions="actions"
      cancel-text="取消"
      @select="onSelect"
      close-on-click-action
    />
  </div>
</template>

<script>
import NavBar from "components/common/NavBar"
import EditBanner from "components/common/EditBanner"
export default {
  name: "Edit",
  data() {
    return {
      model: {},
      show: false,
      text: "",
      title: "",
      gendershow: false,
      actions: [{ name: "男" }, { name: "女" }]
    }
  },
  created() {
    this.selectUser()
  },
  methods: {
    async selectUser() {
      const res = await this.$http.get("/user/" + localStorage.getItem("id"))
      this.model = res.data[0]
    },
    async afterRead(file) {
      // 此时可以自行将文件上传至服务器
      // console.log(file)
      const formdata = new FormData()
      formdata.append("file", file.file)
      const res = await this.$http.post("/upload", formdata)
      // console.log(res)
      this.model.user_img = res.data.url

      this.userUpdate()
    },
    async userUpdate() {
      const res = await this.$http.post(
        "/update/" + localStorage.getItem("id"),
        this.model
      )
      console.log(res)
      if (res.data.code == 200) {
        this.$tip.fail("修改成功")
      }
    },
    getEdit(e) {
      this.title = e
      this.show = true
    },
    confirmDialog() {
      const titleArr = ["昵称", "username", "个性签名", "user_desc"]
      for (let n = 0; n < titleArr.length; n++) {
        if (titleArr[n] == this.title) {
          this.title = titleArr[n + 1]
          break
        }
      }
      for (let n in this.model) {
        if (n == this.title) this.model[n] = this.text
      }
      this.userUpdate()
    },
    onSelect(data) {
      this.model.gender = data.name
      this.userUpdate()
    },
    //退出登录
    userOut() {
      console.log(this.$route)
      localStorage.clear()
      this.$router.push("/login")
    }
  },
  components: {
    NavBar,
    EditBanner
  }
}
</script>

<style lang="scss" scoped>
.edit-header {
  position: relative;
  overflow: hidden;
  img {
    height: 46px;
    width: 46px;
  }
  .upload {
    // left: 0;
    position: absolute;
    opacity: 0;
  }
}
.edit-back {
  width: 100%;
  padding: 4.444vw 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #888;
  margin-top: 5.556vw;
  background-color: #fff;
}
.user-back {
  width: 100%;
  padding: 4.444vw 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #888;
  // margin-top: 5.556vw;
  background-color: #fff;
}
</style>
