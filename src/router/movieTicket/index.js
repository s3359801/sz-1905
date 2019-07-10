export default {
    path:"/movieTicket/:id",
    component:()=>import("components/movieTicket"),
    name:"movieTicket",
    props:true,
    meta:
        {
            flag:false
        }
    }