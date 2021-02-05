<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './pages/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
body {
  margin: 0; padding: 0;
}
.container {
  max-width: 1200px;
  margin: auto;
}
</style>
