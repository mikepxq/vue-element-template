import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home/index.vue";
const routes = [
  {
    path: "/",
    redirect: "/console",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/console",
    component: () => import("@/components/Layout/index.vue"),
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
