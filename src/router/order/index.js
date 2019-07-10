export default {
  path: "/order",
  component: () => import("components/order"),
  name: "order",
  redirect: "/order/finish",
  children: [{
    path: "finish",
    component: () => import("components/finish"),
    name: "finish",
    meta: {
      requireLogin: true
    },
  },
  {
    path: "unfinish",
    component: () => import("components/unfinish"),
    name: "unfinish"
  }
],
}