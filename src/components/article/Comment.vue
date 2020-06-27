<template>
  <div class="comment">
    <p class="comment-title"><span>评论</span><span>(4000)</span></p>
    <div class="comment-user">
      <img :src="userinfo.user_img" alt="" /><input
        type="text"
        ref="input"
        placeholder="说点什么吧"
      />
      <button @click="issueComment">发表</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: ["userinfo"],
  methods: {
    issueComment() {}
  }
}
</script>

<style lang="scss" scoped>
.comment {
  .comment-title {
    margin-bottom: 2.778vw;
    span:nth-child(2) {
      color: #aaa;
    }
  }
  .comment-user {
    display: flex;

    img {
      height: 7.222vw;
      width: 7.222vw;
      border-radius: 50%;
      margin-right: 2.222vw;
    }
    input {
      border: none;
      background-color: #f4f4f4;
      border-radius: 2.778vw;
      flex: 1;
      padding-left: 2.778vw;
      font-size: 4.167vw;
      margin-right: 2.778vw;
    }
  }
}
</style>
