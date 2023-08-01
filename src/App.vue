<template>
  <div id="app">
   <Toast></Toast>
  </div>
</template>

<script>

import Toast from './toast/index.vue'
export default {
  name: 'App',
  components: {
    Toast
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
