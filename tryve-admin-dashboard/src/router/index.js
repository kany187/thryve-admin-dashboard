import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Team from "../views/Team.vue"
import SignIn from "../views/SignIn Flow/SignIn"
import Request from "../views/SignIn Flow/Request"
import Recover from "../views/SignIn Flow/Recover"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/team",
    name: "team",
   component: Team
  },
  {
    path: "/signIn",
    name: "signIn",
    component: SignIn
  },
  {
    path: "/request",
    name: "request",
    component: Request
  },
  {
    path: "/recover",
    name: "recover",
    component: Recover
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
