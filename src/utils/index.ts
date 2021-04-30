import { AppTokenKey } from "@/settings";
/** */
export const getToken = () => (localStorage[AppTokenKey] ? localStorage[AppTokenKey] : "");
/** */
export const setToken = (token = "") => {
  localStorage[AppTokenKey] = token;
};
