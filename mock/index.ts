import userList from "./user";

// import Mock from "mockjs";
// import * as user from "./user";
// import * as Roles from "./roles";
// import * as Article from "./article";
// /**
//  * 仅仅为了容易处理接受值，使用post方式，生产中以实际情况为准
//  */

// Mock.mock("/mock/api/user/info", "post", user.getUserInfo);
// Mock.mock("/mock/api/user/login", "post", user.reqLogin);
// Mock.mock("/mock/api/user/create", "post", user.create);
// Mock.mock("/mock/api/user/update", "post", user.update);
// Mock.mock("/mock/api/user/list", "post", user.getList);
// //
// Mock.mock("/mock/api/role/list", "post", Roles.getList);
// Mock.mock("/mock/api/role/create", "post", Roles.roleCreate);
// Mock.mock("/mock/api/role/update", "post", Roles.update);
// Mock.mock("/mock/api/role/option-list", "get", Roles.getOptionList);

// Mock.mock("/mock/api/article/create", "post", Article.create);
// Mock.mock("/mock/api/article/update", "post", Article.update);
// Mock.mock("/mock/api/article/list", "post", Article.getList);
// Mock.mock("/mock/api/article/info", "post", Article.info);

export default [...userList];
/**参照
 * https://github.com/anncwb/vite-plugin-mock/blob/HEAD/README.zh_CN.md
 */
