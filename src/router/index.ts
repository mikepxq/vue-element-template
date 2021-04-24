import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home";
export const ConsoleRoute: RouteRecordRaw = {
  path: "/console",
  name: "Console",
  component: () => import("@/components/Layout"),
  children: [
    {
      path: "/console/d",
      component: () => import("@/views/Home"),
      meta: { icon: "location", title: "面板" },
      children: [
        {
          path: "/console/d/0",
          name: "Console",
          component: () => import("@/components/Layout"),
          meta: { icon: "location", title: "面板" },
          children: [
            {
              path: "/console/d/0",
              name: "Console",
              component: () => import("@/components/Layout"),
              meta: { icon: "location", title: "面板" },
            },
          ],
        },
        {
          path: "/console/d/1",
          name: "Console",
          component: () => import("@/components/Layout"),
          meta: { icon: "location", title: "面板" },
        },
      ],
    },
  ],
};
const routes = [
  {
    path: "/",
    redirect: "/console",
  },
  {
    path: "/home",
    component: Home,
  },
  ConsoleRoute,
  {
    path: "/login",
    component: () => import("@/views/Login.vue"),
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
