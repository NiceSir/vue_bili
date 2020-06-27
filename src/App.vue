<template>
  <div id="app">
    <keep-alive include="Home">
      <router-view />
    </keep-alive>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f4f4f4;
}
p {
  padding: 0;
  margin: 0;
}
</style>
