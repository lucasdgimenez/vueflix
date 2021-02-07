<template>
  <section id="home" class="container">
    <div v-if="loading">
      <h1>Carregando</h1>
    </div>

    <article v-else v-for="item in filmes" :key="item.id" @click="selectMovie(item)">
      <h1>{{item.title}}</h1> 
      <img :src="`https://image.tmdb.org/t/p/w300${item.poster_path}`" :alt="`item.${item.title}`"/>
    </article>
    
    <Modal v-if="showModal" :movie="filme" @close="showModal = false">
    </Modal>

  </section>
</template>

<script>

import api from "../services/api"
import Modal from "../components/Modal"

export default {
  name: 'Home',
  components: {
    Modal
  },
  data() {
    return {
      loading: true,
      filmes: [],
      filme: {},
      showModal: false
    }
  },
  methods: {
    selectMovie(movie) {
      this.showModal = true;
      this.filme = movie
    }
  },
  async created() {
    const response = await api.get();
    this.filmes = response.data.results;
    this.loading = false;
  }
}
</script>

<style scoped>

section {
  display: flex;
  flex-wrap: wrap;
  max-width: 980px;
  justify-content: center; align-items: center;
}

h1 {
  font-size: 1.5rem;
}
article {
  color: white;
  margin-top: 10px; display: flex; 
  flex-direction: column; align-items: center; 
  flex: 4; padding: 5px;
}

article:hover {
  background: #7a1307;
  cursor: pointer;
}

.teste {
  background: chocolate;
}

.section {
  display: flex;
  flex-direction: column;
}

</style>