<template>
  <div class="navbar">
    <div class="logo" @click="$router.push('/')">
      <img src="@/assets/logo.png" alt="" />
    </div>
    <div>
      <p>
        请输入内容
        <van-icon class="search-icon" name="search" />
      </p>
    </div>
    <div>
      <div @click="$router.push('/edit')">
        <img :src="user_img" alt="" v-if="user_img" />
        <img src="@/assets/default_img.jpg" alt="" v-else />
      </div>
      <p>下载APP</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user_img"]
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 12.5vw;
  background-color: white;
  display: flex;
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;

    img {
      height: 90%;
    }
  }
  div:nth-child(2) {
    flex: 1;
    display: flex;
    align-items: center;
    margin: 0 5px;
    color: #aaa;
    p {
      font-size: 12px;
      position: relative;
      line-height: 30px;
      background-color: #f4f4f4;
      width: 100%;
      border-radius: 13px;
      height: 26px;
      padding-left: 30px;
      .search-icon {
        position: absolute;
        left: 8px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  div:nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 7.222vw;
      width: 7.222vw;
      border-radius: 50%;
    }
    p {
      padding: 1.389vw 2.778vw;
      color: white;
      margin: 0 2.222vw;
      background-color: #fb7299;
      font-size: 13px;
      border-radius: 3px;
    }
  }
}
</style>
