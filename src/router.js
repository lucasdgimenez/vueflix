import Vue from "vue"
import Router from "vue-router"
import Home from "./pages/Home"
import MeusFilmes from "./pages/MeusFilmes"

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/salvos",
            component: MeusFilmes
        }
    ]
})

export default router;
