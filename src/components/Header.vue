<template>
  <header id="header">
    <router-link to="/" exact>
      <img src="../assets/vuemovies.png" alt="">
    </router-link>
    <router-link to="/salvos" class="save">Meus filmes</router-link>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
#header {
  background: #170506;
  padding: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

#header a {
  color: #fff;
}

img {
  width: 80%;
  height: 70%;
}

.save {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>