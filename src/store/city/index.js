import {getCity} from "api/movie.js"
const state = {
    AList:[],
    iptVal:"上海市",
    id:"310100",
    flag:true
}

const mutations ={
    getMutationCitys(state,params){
        
        state.AList = params;
        console.log(state.AList);   
    },
    handleModifyChoose(state,params){
        state.iptVal = params.name;
        state.id = params.id;
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
        console.log(data);
        
          }
    }

export default {
    state,
    mutations,
    actions,
    namespaced:true

}
