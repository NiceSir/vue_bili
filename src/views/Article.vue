<template>
  <div>
    <nav-bar :user_img="model.user_img"></nav-bar>
    <div class="detail_info">
      <div class="video">
        <video controls :src="aitem.content" style="width:100%;"></video>
      </div>

      <div class="detail_info_text">
        <div>
          <span v-if="aitem.category != undefined">{{
            aitem.category.title
          }}</span>
          <span>{{ aitem.name }}</span>
        </div>
        <!-- <span>111</span> -->
        <div>
          <span v-if="aitem.userinfo != undefined">{{
            aitem.userinfo.name
          }}</span>
          <span>156万次观看</span>
          <span>5100弹幕</span>
          <span>{{ aitem.date }}</span>
        </div>
        <div>
          <p>
            <van-icon name="star-o" size="5.556vw" />
            <span>收藏</span>
          </p>
          <p>
            <van-icon name="down" size="5.556vw" />
            <span>缓存</span>
          </p>
          <p>
            <van-icon name="shrink" size="5.556vw" />
            <span>分享</span>
          </p>
        </div>
      </div>
      <div class="detail-parent">
        <detail
          class="detail-item"
          v-for="item in commendlist"
          :key="item.id"
          :item="item"
        ></detail>
      </div>
      <div class="comment-parent">
        <comment :userinfo="model"></comment>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/NavBar"
import Detail from "components/common/Detail"
import Comment from "components/article/Comment"
export default {
  name: "Article",
  data() {
    return {
      model: [],
      aitem: {},
      commendlist: {},
      comment: []
    }
  },
  created() {
    this.selectUser()
    this.selectArticle()
    this.selectCommend()
  },
  methods: {
    //获取 用户
    async selectUser() {
      const res = await this.$http.get("/user/" + localStorage.getItem("id"))
      this.model = res.data[0]
    },
    //获取 文章信息
    async selectArticle() {
      const res = await this.$http.get("/article/" + this.$route.params.id)
      // console.log(res.data[0])
      this.aitem = res.data[0]
    },
    //获取 推荐页
    async selectCommend() {
      const res = await this.$http.get("/commend")
      this.commendlist = res.data
    },
    //获取评论
    async selectComment() {
      const res = await this.$http.get("/comment")
      console.log(res)
    }
  },
  watch: {
    $route() {
      this.selectArticle()
      this.selectCommend()
    }
  },
  components: {
    NavBar,
    Detail,
    Comment
  }
}
</script>

<style lang="scss" scoped>
.detail_info {
  background-color: #fff;
  .detail_info_text {
    padding: 4.167vw;
    div:nth-child(1) {
      span:nth-child(1) {
        color: #fb7299;
        background-color: #f4f4f4;
        padding: 0 2.778vw;
        border-radius: 2.778vw;
      }
    }
    div:nth-child(2) {
      padding: 2.778vw;
      span {
        color: #aaa;
        font-size: 3.333vw;
        padding-right: 2.778vw;
      }
      span:nth-child(1) {
        color: black;
        font-size: 3.889vw;
      }
    }
    div:nth-child(3) {
      display: flex;
      p {
        margin-right: 4.167vw;
        display: flex;
        align-items: center;
        color: #757575;
        span {
          font-size: 3.611vw;
        }
      }
    }
  }

  //评论
  .comment-parent {
    margin-top: 2.778vw;
    padding: 2.778vw;
  }
}

//推荐页
.detail-parent {
  display: flex;
  // flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  .detail-item {
    width: 45%;
    margin: 1.389vw 0;
  }
}
</style>
