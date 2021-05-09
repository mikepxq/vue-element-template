// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { requestGet, requestPost } from "./request";
/** test用get方法获取用户信息 */
export const reqLogin: ApiFn<ReqDataLogin, ResDataLogin> = (data) => requestPost("/api/user/login", data);
/** test用post方法获取用户信息 */
export const reqUserInfo: ApiFn<ReqDataUserInfo, ResDataUserInfo> = (data) => requestPost("/api/user/info", data);
