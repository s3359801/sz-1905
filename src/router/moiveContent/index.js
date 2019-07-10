export default {
path:"/movieContent/:id",
component:()=>import("components/movieContent"),
name:"movieContent",
props:true,
meta:
    {
        flag:false
    }
}