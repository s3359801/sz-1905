import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import movie from "./movie";
import cinema from "./cinema"
import mine from "./mine";

export default new VueRouter({
  routes: [
    {
      path:"/",
      redirect:"/movie"
    },
    movie,
    cinema,
    mine,
  ]
})
