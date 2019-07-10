export default {
    path:"/movieComing/:id",
    component:()=>import("components/movieComing"),
    name:"movieComing",
    props:true,
    meta:
        {
            flag:false
        }
    }