import http from "utils/http.js"
export const getMovieNow = ()=>http("get","s/index",{lan:"",lon:""})

export const getMovie = (page)=>http("post","s/hotMovieList",{page})

export const getCinema = (city,page)=>http("post","s/cinemaList",{city,page})

export const searchCinema = (keyword,city,page)=>http("post","s/cinemaList",{keyword,city,page})

export const getDistrict = (city)=>http("get","s/districtList",{city})

export const getCity = ()=>http("get","s/cityList")

export const getId = (id)=>http("get","s/districtList",{city:id})

