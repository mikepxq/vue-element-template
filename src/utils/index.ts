import { AppTokenKey } from "@/settings";
/** */
export const getToken = () => (localStorage[AppTokenKey] ? localStorage[AppTokenKey] : "");
/** */
export const setToken = (token = "") => {
  localStorage[AppTokenKey] = token;
};

/** 模拟加载时间 */
export const sleep = (times = 2) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(true);
    }, times * 1000);
  });
};
