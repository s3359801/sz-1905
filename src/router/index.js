import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import movie from "./movie";
import cinema from "./cinema"
import mine from "./mine";
import movieContent from "./moiveContent"
import movieTicket from "./movieTicket"
import movieChoose from "./movieChoose"
import movieComing from "./movieComing"
import citys from "./citys"

const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/movie"
    },
    movie,
    cinema,
    mine,
    movieTicket,
    movieContent,
    movieChoose,
    movieComing,
    citys

  ]
})

export default router