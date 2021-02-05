<template>
  <section id="home" class="container">
        <article v-for="item in filmes" :key="item.id">

          {{item.title}}
              <img :src="`https://image.tmdb.org/t/p/w300${item.poster_path}`" :alt="`item.${original_title}`"/>
        </article>
  </section>
</template>

<script>
import api from "../services/api"

export default {
  name: 'Home',
  data() {
    return {
      filmes: []
    }
  },
  async created() {
    const response = await api.get();
    this.filmes = response.data.results;
    console.log(this.filmes)
  }
}
</script>

<style scoped>

section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; align-items: center; background: chocolate;
}
article {
  margin-top: 10px; display: flex; background: crimson;
  flex-direction: column; align-items: center; 
  flex: 4;
}
</style>