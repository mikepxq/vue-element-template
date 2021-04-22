/**统一响应结构 */
type ApiRes<T = any> = {
  code: number;
  data: T;
  message?: string;
};
/** 统一请求函数 */
type ApiFn<Req = any, Res = ApiRes> = (data?: Req) => Res | Promise<Res>;
