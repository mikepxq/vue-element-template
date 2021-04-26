import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home";
export const ConsoleRoute: RouteRecordRaw = {
  path: "/console",
  name: "Console",
  component: () => import("@/components/Layout"),
  props: (route) => route,
  children: [
    {
      path: "/console/dashboard",
      component: () => import("@/views/Dashboard/index"),
      meta: { icon: "location", title: "Dashboard" },
    },
    {
      path: "/console/table",
      component: () => import("@/views/Table/index"),
      meta: { icon: "location", title: "Table" },
    },
    {
      path: "/console/form",
      component: () => import("@/views/Form/index"),
      meta: { icon: "location", title: "Form" },
    },
    {
      path: "/console/nested",
      // name: "Console",
      component: () => import("@/views/Nested/index"),
      meta: { icon: "location", title: "Nested" },
      children: [
        {
          path: "/console/nested/nested-1",
          // name: "Console",
          component: () => import("@/views/Nested/Nested-1/index"),
          meta: { icon: "location", title: "Nested-1" },
        },
        {
          path: "/console/nested/nested-2",
          // name: "Console",
          component: () => import("@/views/Nested/Nested-2/index"),
          meta: { icon: "location", title: "Nested-2" },
          children: [
            {
              path: "/console/nested/nested-2/nested-2-1",
              // name: "Console78",
              component: () => import("@/views/Nested/Nested-2/Nested-2-1/index"),
              meta: { icon: "location", title: "Nested-2-1" },
            },
            {
              path: "/console/nested/nested-2/nested-2-2",
              // name: "Console/2",
              component: () => import("@/views/Nested/Nested-2/Nested-2-2/index"),
              meta: { icon: "location", title: "Nested-2-2" },
            },
          ],
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
