<template>
  <div class="item" @click="pathConfirm">
    <div class="imgparent">
      <img :src="item.img" alt="" style="width:100%;height:100px;" />
      <div class="bottom">
        <div>
          <img src="@/assets/play.png" alt="" />
          <span>1598</span>
        </div>
        <div>
          <img src="@/assets/order.png" alt="" />
          <span class="comment">{{
            item.commentlen ? item.commentlen : "66万"
          }}</span>
        </div>
      </div>
    </div>
    <p>
      {{ item.name }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    pathConfirm() {
      // console.log(this.$route)
      if (this.$route.path != "/article/" + this.item.id) {
        this.$router.push("/article/" + this.item.id)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  p {
    font-size: 3.333vw;
  }
  .imgparent {
    position: relative;
    .bottom {
      display: flex;
      font-size: 3vw;
      justify-content: space-between;
      padding: 0 2.222vw;
      position: absolute;
      color: white;
      left: 0;
      right: 0;
      // top: 50%;
      bottom: 0.556vw;
      background: linear-gradient(0, black, transparent);
      div > img {
        height: 3.333vw;
        padding-right: 0.556vw;
      }
    }
  }
}
</style>
