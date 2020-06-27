<template>
  <div class="user-detail">
    <div>
      <div class="user-pic">
        <img :src="userinfo.user_img" alt="" v-if="userinfo.user_img" />
        <img src="@/assets/default_img.jpg" alt="" v-else />
      </div>
      <div class="user-edit">
        <div>
          <p><span>0</span><span>粉丝</span></p>
          |
          <p><span>10</span><span>关注</span></p>
          |
          <p><span>2</span><span>获赞</span></p>
        </div>
        <div class="edit-btn" @click="$router.push('/edit')">编辑资料</div>
      </div>
    </div>
    <div>
      <p>{{ userinfo.username }}</p>
      <p v-if="userinfo.user_desc">{{ userinfo.user_desc }}</p>
      <p v-else>这个人很神秘，什么都没有写</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["userinfo"]
}
</script>

<style lang="scss" scoped>
.user-detail {
  padding: 0 3.333vw;
  background-color: white;

  > div:nth-child(1) {
    display: flex;

    .user-pic {
      img {
        width: 23.611vw;
        height: 23.611vw;
        border-radius: 50%;
      }
      margin-right: 8.333vw;
    }

    .user-edit {
      flex: 1;
      display: flex;
      justify-content: center;
      flex-direction: column;
      div:nth-child(1) {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #aaa;
        margin-bottom: 2.778vw;
        p {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          font-size: 3.889vw;
          span:nth-child(1) {
            color: black;
          }
          span:nth-child(2) {
            color: #aaa;
          }
        }
      }
      .edit-btn {
        border: 0.278vw solid #fb7a9f;
        text-align: center;
        padding: 0.833vw;
        margin: 0 2.778vw;
        color: #fb7a9f;
        border-radius: 1.389vw;
      }
    }
  }

  > div:nth-child(2) {
    p:first-child {
      font-size: 6.667vw;
      padding: 2.222vw 1.389vw 1.389vw;
      font-weight: 300;
    }
    p:last-child {
      color: #aaa;
      padding-bottom: 1.389vw;
    }
  }
}
</style>
