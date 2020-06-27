<template>
  <div>
    <van-field
      :label="label"
      :type="type"
      :placeholder="placeholder"
      :rule="rule"
      v-model="content"
    />
  </div>
</template>

<script>
export default {
  props: ["label", "type", "placeholder", "rule"],
  data() {
    return {
      content: ""
    }
  },
  methods: {
    handlerRulg() {
      const rul = new RegExp(this.rule)
      // console.log(rule)
      if (rul.test(this.content)) {
        this.$emit("inputChange", this.content)
      }
    }
  },
  watch: {
    content() {
      this.handlerRulg()
    }
  }
}
</script>

<style></style>
