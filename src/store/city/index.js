import {getCity,getDistrict} from "api/movie.js"  
const state = {
    AList:[],
    iptVal:sessionStorage.getItem("iptVal")||"上海市",
    id:sessionStorage.getItem("id")||"310100",
    flag:true
}

const mutations ={
    getMutationCitys(state,params){
        
        state.AList = params;
    },
   
    handleModifyChoose(state,params){
        state.iptVal = params.name;
        state.id = params.id;
        
        sessionStorage.setItem("iptVal",params.name)
        sessionStorage.setItem("id",params.id)
    }
}
const actions ={
    async getCitys({commit}){
        let data = await getCity()
        if(data){
            state.flag = false
        }else{
            state.flag = true;
        }
        commit("getMutationCitys",data.list)
        
          },

}


export default {
    state,
    mutations,
    actions,
    namespaced:true

}
