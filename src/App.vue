<template>
  <div id="app">
    <!-- <Toast></Toast> -->
    <input type="button" value="显示弹窗" @click="showToast">
  </div>
</template>

<script>

// import Toast from './toast/index.vue'
export default {
  name: 'App',
  components: {
  },
  methods: {
    showToast() {
      this.$toast('我是弹窗消息')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
