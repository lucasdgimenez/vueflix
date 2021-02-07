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
  margin: 0; padding: 0; background: #000; color: white;
}

img {
  display: block;
}

h1, h2 {
  text-align: center;
}

li {
  list-style: none;
}

a {
  text-decoration: navajowhite;
}
.container {
  max-width: 1200px;
  margin: auto;
}

button {
  background: #E6E6E6;
  padding: 10px;
  border-radius: 5%;
  cursor: pointer;
  font-size: 1.2rem;
}

button:hover {
  background: #CCC;
}
</style>
