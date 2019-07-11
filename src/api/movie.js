import http from "utils/http.js"
export const getMovieNow = ()=>http("get","s/index",{lan:"",lon:""})

export const getMovie = (page)=>http("post","s/hotMovieList",{page})

export const getCinema = (page)=>http("post","s/cinemaList",{page})

export const getCity = ()=>http("get","s/cityList")

export const getId = (id)=>http("get","s/districtList",{city:id})

