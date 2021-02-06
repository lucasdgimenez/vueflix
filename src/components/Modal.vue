<template>
  <div id="modal" class="modal">
    <div class="container">
      <a @click="$emit('close')" class="close">X</a>
      <div class="movie">
        <h1>{{movie.title}}</h1>
        <img :src="`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`" :alt="`item.${movie.title}`"/>
        <span>Popularidade: {{movie.vote_average}}</span>
        <ul>
          Generos: <li v-for="(item, index) in genreName" :key="index">
            {{item }}
          </li>
        </ul>
        <p>{{movie.overview}}</p>
        <p>{{movie}}</p>
        <button>Salvar</button>
      </div>
    </div>
  </div>
</template>

<script>
import {genres} from "../services/api"

export default {
  props: ['movie'],
  data() {
    return {
      genres: [], //todos os generos 
      genreId: [], //id dos generos do filme selecionado
      genreName: [] //nome dos generos que vao aparecer
    }
  },
  async created() {
    const response = await genres.get();
    this.genres = response.data.genres;
    this.movie.genre_ids.forEach((item) => {
      this.genreId.push(item)
    })
    this.genres.forEach((item) => {
      this.genreId.forEach((id) => {
        if(item.id === id) {
          this.genreName.push(item.name)
        }
      })
    })
  },
  methods: {
   /* saveMovie() {
      const minhaLista = localStorage.getItem('vuemovies')
      let filmes = JSON.parse(minhaLista) || [];
      const hasFilme = filmes.some((filme) => )
    }*/
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
}
.modal .container {
  position: fixed;
  max-width: 600px;
  top: 4vh;
  bottom: 4vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 4px;
  background: white;
  box-shadow: 0 0 20px rgba(0,0,0,0.7);
  overflow: auto;
}

.modal ul {
  display: flex; 
  justify-content: flex-start; align-items: center; 
  font-weight: bold; 
}

.modal li {
  font-weight: normal;
}


.close {
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  font-size: 2rem; float: right;
}

.close:hover {
  background: #CCC;
}

</style>