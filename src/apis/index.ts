import { requestGet, requestPost } from "./request";
/** test用get方法获取用户信息 */
export const reqUserGetInfoByGet = () => requestGet("/api/user/get-user-info-by-get");
/** test用post方法获取用户信息 */
export const reqUserGetInfoByPost = (data: any) => requestPost("/api/user/get-user-info-by-post", data);
