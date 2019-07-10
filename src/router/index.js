import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import movie from "./movie";
import cinema from "./cinema"
import mine from "./mine";

import order from "./order";
import ticket from "./ticket";
import changePwd from "./changePwd";
import login from "./login";
import resetPwd from "./resetPwd";
import register from "./register";
import seat from "./seat"
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
    {
      path:"/home",
      redirect:"/movie"
    },
    movie,
    cinema,
    mine,
    order,
    ticket,
    changePwd,
    login,
    register,
    resetPwd,
    seat,
    movieTicket,
    movieContent,
    movieChoose,
    movieComing,
    citys
  ],
})
router.beforeEach((to, from, next) => {

  if(to.meta.requireLogin) {
    if(window.localStorage.getItem('userInfo')){
      next()
    } else{
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

export default router

