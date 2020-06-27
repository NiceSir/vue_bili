<template>
  <div class="edit-banner" @click="sendEdit(editMsg)">
    <div>
      {{ editMsg }}
    </div>
    <div>
      <slot name="right"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["editMsg"],
  methods: {
    sendEdit(msg) {
      this.$emit("sendEdit", msg)
    }
  }
}
</script>

<style lang="scss" scoped>
.edit-banner {
  background-color: white;
  padding: 4.167vw;
  font-size: 3.889vw;
  color: #333;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  div:nth-child(1) {
    display: flex;
    align-items: center;
  }
}
</style>
