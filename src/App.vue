<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
body {
  margin: 0; padding: 0; background: #000; 
}

img {
  display: block;
}

a {
  text-decoration: navajowhite;
}
.container {
  max-width: 1200px;
  margin: auto;
}
</style>
