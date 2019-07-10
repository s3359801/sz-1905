export default {
  path:"/ticket",
  component:()=>import("components/ticket"),
  name:"ticket",
  meta: {
    requireLogin: true
  }
}