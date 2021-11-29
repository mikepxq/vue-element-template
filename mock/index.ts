import { MockMethod } from "vite-plugin-mock";
// import Mock from "mockjs";
import * as user from "./user";
import * as Roles from "./roles";
import * as Article from "./article";

export default [
  //user
  { url: "mock/api/user/login", method: "post", response: user.reqLogin },
  { url: "/mock/api/user/login", method: "post", response: user.reqLogin },
  { url: "/mock/api/user/create", method: "post", response: user.create },
  { url: "/mock/api/user/update", method: "post", response: user.update },
  { url: "/mock/api/user/list", method: "post", response: user.getList },
  //role
  { url: "/mock/api/role/list", method: "post", response: Roles.getList },
  { url: "/mock/api/role/create", method: "post", response: Roles.roleCreate },
  { url: "/mock/api/role/update", method: "post", response: Roles.update },
  { url: "/mock/api/role/option-list", method: "get", response: Roles.getOptionList },
  //article
  { url: "/mock/api/article/create", method: "post", response: Article.create },
  { url: "/mock/api/article/update", method: "post", response: Article.update },
  { url: "/mock/api/article/list", method: "post", response: Article.getList },
  { url: "/mock/api/article/info", method: "post", response: Article.info },
] as MockMethod[];
/**参照
 * https://github.com/anncwb/vite-plugin-mock/blob/HEAD/README.zh_CN.md
 */
