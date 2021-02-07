<template>
  <div id="salvos" class="container">
    <h1>Meus filmes</h1>
    <h2>Seus filmes ficarão salvos no seu navegador</h2>

    <article v-for="filme in myMovies" :key="filme.id" class="filme">
      <h3>{{filme.title}}</h3>  
      <button @click="selectMovie(filme)">Ver detalhes</button>
      <button @click="deleteMovie(filme.id)">Excluir da lista</button>
    </article>

    <Modal v-if="showModal" :movie="filme" @close="showModal = false">
    </Modal>
  </div>
</template>

<script>
import Modal from "../components/Modal"

export default {
  name: 'MeusFilmes',
  components: {
    Modal
  },
  data() {
    return {
      myMovies: [],
      filme: {},
      showModal: false
    }
  },
  methods: {
    selectMovie(movie) {
      this.showModal = true;
      this.filme = movie
    },
    deleteMovie(id) {
      let ok = confirm("Voce deseja excluir esse filme da lista?")
      if (ok) {
        let filtroFilmes = this.myMovies.filter((item) => {
          return (item.id !== id)
        })
        return this.myMovies = filtroFilmes
      }
    }
  },
  created() {
    const lista = localStorage.getItem('vuemovies')
    this.myMovies = JSON.parse(lista) || []
  },
  watch: {
    myMovies() {
      localStorage.setItem('vuemovies', JSON.stringify(this.myMovies))
    }
  }
}
</script>

<style scoped>
.filme {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.filme h3 {
  flex: 1;
}
</style>