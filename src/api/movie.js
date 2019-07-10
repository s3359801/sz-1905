import http from "utils/http.js"
export const getMovieNow = ()=>http("get","s/index",{lan:"",lon:""})

export const getCity = ()=>http("get","s/cityList")

export const getId = (id)=>http("get","s/districtList",{city:id})

