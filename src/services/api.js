import axios from "axios"

const API_KEY = '03e4faf01a2f15553c17ba6a94a2d963'

const api = axios.create({
  baseURL: `https://api.themoviedb.org/4/list/7074977?page=1&api_key=${API_KEY}`
})

export default api;