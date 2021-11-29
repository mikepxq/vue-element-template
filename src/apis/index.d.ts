/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="../store/user.d.ts"/>
/** 页面请求 */
type DispatchFn<Req = any, Res = any> = (payload: string, options?: Req) => ApiRes<Res> | Promise<ApiRes<Res>>;

/**
 * 接口格式
 *
 * 传入参数统一 json map 格式
 *
 *
 */
type ApiFn<Req = Record<any, any>, Res = any> = (data?: InterfaceToType<Req>) => Promise<ApiRes<Res>>;

/**接口统一响应结构 */
type ApiRes<T = any> = {
  code: number;
  data: T;
  message?: string;
};
interface ApiData {
  [key: string]: number | string | any[];
}
/** 接口转类型 */
type InterfaceToType<Interface> = { [key in keyof Interface]: Interface[key] };

/************************************ 全局 ********************************************** */
interface TableItem {
  sn?: number; //序号
}
interface ReqPageData {
  current?: number;
  pageSize?: number;
}
interface ResPageData {
  total: number;
}
interface OptionItem {
  text: string;
  value: number;
}
/************************************ 全局 end********************************************** */

/************************************ 用户操作 ********************************************** */
/**获取用户信息 */
interface ReqDataUserInfo {
  id: string | number;
}
interface ResDataUserInfo {
  username: string;
  authList: string[];
  roleName: Model.RoleKeys;
  token: string;
  id: number;
}

/**用户登录 */
interface ReqDataLogin {
  username: string;
  password: string;
}
type ResDataLogin = ResDataUserInfo;
/************************************ 用户操作 end********************************************** */
/************************************ 权限管理 ********************************************** */

interface FormDataAuthManageList {
  roleName?: string;
}

type ReqDataRoleList = FormDataAuthManageList;
interface RoleItem extends TableItem {
  id: number;
  roleName: string;
  checkedKeys: string[];
  halfCheckedKeys: string[];
  remark?: string;
}
/** 获取权限管理列表 响应数据 */
interface ResDataRoleList extends ResPageData {
  list: RoleItem[];
}
interface FormDataRoleCreate {
  roleName: string;
  authTree?: {
    checkedKeys: string[];
    halfCheckedKeys: string[];
  };
  remark?: string;
}
interface ReqDataRoleCreate {
  roleName: string;
  checkedKeys: string[];
  halfCheckedKeys: string[];
  remark?: string;
}
interface ReqDataRoleUpdate {
  id: number;
  roleName: string;
  checkedKeys: string[];
  halfCheckedKeys: string[];
  remark?: string;
}
//

interface UserItem extends TableItem {
  id: number;
  username: string;
  roleId: number;
  roleName?: string;
}
interface FormDataUserCreate {
  username: string;
  roleId: number;
}
type ReqDataUserCreate = FormDataUserCreate;
interface FormDataUserList {
  username?: string;
}
interface ReqDataUserList extends FormDataUserList, ReqPageData {}
interface ResDataUserList extends ResPageData {
  list: UserItem[];
}

interface ReqDataUserUpdate extends FormDataUserCreate {
  id: number;
}
/************************************ 权限管理 end********************************************** */
/************************************ 文章管理 ********************************************** */
/**热度 */
type HotNumber = 0 | 1 | 2 | 3 | 4 | 5;
interface ArticleItem extends TableItem {
  id: number;
  title: string;
  hot: HotNumber;
  author: author;
  description?: string;
  dateTime?: string;
  publishStatus?: ArticleStatus;
  // author: string;
}
interface FormDataArticle {
  title: string;
  author: author;
  description?: string;
}
type ArticleStatus = "publish" | "draft";
interface ReqDataArticleCreate {
  title: string;
  author: author;
  description?: string;
  markdown: string;
  publishStatus?: ArticleStatus;
}
interface ResDataArticleCreate {
  id: number;
}
/** 更新草稿 */
interface ReqDataArticleUpdate extends ReqDataArticleCreate {
  id: number;
}

interface FormDataArticleList {
  name?: string; //
}
interface ReqDataArticleList extends FormDataArticleList, ReqPageData {}
interface ResDataArticleList extends ResPageData {
  list: ArticleItem[];
}
interface ReqDataArticleInfo {
  id: number;
}
interface ArticleInfoItem extends ArticleItem {
  markdown?: string;
}
type ResDataArticleInfo = ArticleInfoItem | null;
/************************************ 文章管理 end********************************************** */
