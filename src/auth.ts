import store from "./store";
import router, { getIsAuthWithUserAuthPassRoutes } from "./router";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";
import { getToken } from "@/utils";
router.beforeEach((to, from, next) => {
  Nprogress.start();
  //
  if (to.path === "/login") {
    return next();
  }
  //如果没登录
  const hasToken = getToken();
  if (!hasToken) {
    return next(`/login?redirect=${to.path}`);
  }

  const isAuth = getIsAuthWithUserAuthPassRoutes(store.getters.userAuth, to);
  if (!isAuth) {
    return next("/404");
  }
  next();
});

router.afterEach(() => {
  Nprogress.done();
});
