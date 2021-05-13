import { createRouter, createWebHashHistory, RouteLocationNormalized, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home";
export const ConsoleRoute: RouteRecordRaw = {
  path: "/console",
  name: "Console",
  redirect: "/console/dashboard",
  component: () => import("@/components/Layout"),
  props: (route) => route,
  meta: {
    auths: ["superAdmin"],
    title: "console",
  },
  children: [
    {
      path: "/console/role-manage",
      component: () => import("@/views/role/manage.vue"),
      meta: {
        icon: "location",
        title: "角色管理",
        // auths: ["superAdmin0"], //test
        //  hidden: true
      },
      // children: [
      //   {
      //     path: "/console/role-manage/create",
      //     component: () => import("@/views/role/manage.vue"),
      //     meta: {
      //       title: "新增角色",
      //     },
      //   },
      // ],
    },
    {
      path: "/console/dashboard",
      component: () => import("@/views/Dashboard/index"),
      meta: {
        icon: "location",
        title: "Dashboard",
        // auths: ["superAdmin0"], //test
        //  hidden: true
      },
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
          meta: {
            icon: "location",
            title: "Nested-1",
            //  hidden: true
            // auths: ["superAdmin0"], //test
          },
        },
        {
          path: "/console/nested/nested-2",
          // name: "Console",
          component: () => import("@/views/Nested/Nested-2/index"),
          meta: {
            icon: "location",
            title: "Nested-2",
            // hidden: true
            // auths: ["superAdmin0"], //test
          },
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
    component: () => import("@/views/Login"),
  },
  {
    path: "/404",
    component: () => import("@/views/404"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});

/**
 * 获得，当前用户，访问当前路由是否有权限
 * @param userAuth
 * @param route
 * @returns
 */
export const getIsAuthWithUserAuthOnRoute = (userAuth: string, route: RouteRecordRaw) => {
  //没有配置权限
  if (!route.meta) return true;
  if (!route.meta.auths || route.meta.auths.length < 1) return true;
  // * 用户登录后，任何权限都可以
  if (route.meta.auths.includes("*")) return true;
  //用户拥有权限
  if (route.meta.auths.includes(userAuth)) return true;
  return false;
};
/**
 * 获得，根据用户权限是否可以访问一个路由，必须父级路由都通过
 * @param userAuth
 * @param to
 */
export const getIsAuthWithUserAuthPassRoutes = (userAuth: string, to: RouteLocationNormalized) => {
  return (
    to.matched.filter((route) => {
      return getIsAuthWithUserAuthOnRoute(userAuth, route);
      //从父级循环下来，必须全部通过
    }).length >= to.matched.length
  );
};
