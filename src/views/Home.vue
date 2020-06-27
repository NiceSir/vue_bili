<template>
  <div class="home">
    <nav-bar :user_img="model.user_img"></nav-bar>
    <van-tabs v-model="active" swipeable>
      <van-tab v-for="item in category" :title="item.title" :key="item._id">
        <van-list
          v-model="item.loading"
          :finished="item.finished"
          finished-text="我也是有底线的"
          @load="onLoad"
          :immediate-check="true"
        >
          <div class="detail-parent">
            <detail
              class="detail-item"
              v-for="(listitem, index) in item.list"
              :key="index"
              :item="listitem"
            ></detail>
          </div>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import NavBar from "components/common/NavBar"
import Detail from "components/common/Detail"
export default {
  name: "Home",
  data() {
    return {
      model: {},
      category: [],
      active: 0
    }
  },
  created() {
    this.selectUser()
    this.selectCategory()
  },
  methods: {
    //获取 用户
    async selectUser() {
      const res = await this.$http.get("/user/" + localStorage.getItem("id"))
      this.model = res.data[0]
    },
    //获取界面tab数据
    async selectCategory() {
      const res = await this.$http.get("/category")
      // console.log(res.data)
      this.dealCategory(res.data)
    },
    // 数据处理
    dealCategory(data) {
      const Arr = data.map(item => {
        let array = {
          title: item.title,
          _id: item._id,
          list: [],
          loading: true,
          finished: false,
          page: 0,
          pagesize: 10
        }
        return array
      })
      this.category = Arr
      this.selectList()
    },
    //每次get几条数据
    categoryItem() {
      const categoryitem = this.category[this.active]
      return categoryitem
    },
    //获取 列表
    async selectList() {
      const categoryitem = this.categoryItem()
      // console.log(this.active)
      const res = await this.$http.get("/detail/" + categoryitem._id, {
        params: {
          page: categoryitem.page,
          pagesize: categoryitem.pagesize
        }
      })
      // console.log(res.data)
      categoryitem.list.push(...res.data)
      categoryitem.loading = false
      if (res.data.length < categoryitem.pagesize) {
        categoryitem.finished = true
      }
    },
    //下滑刷新
    onLoad() {
      const categoryitem = this.categoryItem()
      setTimeout(() => {
        categoryitem.page++
        this.selectList()
      }, 500)
    }
  },
  watch: {
    active() {
      this.selectList()
    }
  },
  components: {
    NavBar,
    Detail
  }
}
</script>

<style lang="scss" scoped>
.home {
  background-color: white;
}
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
