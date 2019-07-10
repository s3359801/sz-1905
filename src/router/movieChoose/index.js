export default {
    path:"/movieChoose/:id",
    component:()=>import("components/movieChoose"),
    name:"movieChoose",
    props:true,
    meta:
        {
            flag:false
        }
    }