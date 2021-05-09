/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="../store/user.d.ts"/>
/** 页面请求 */
type DispatchFn<Req = any, Res = any> = (payload: string, options?: Req) => ApiRes<Res> | Promise<ApiRes<Res>>;

/** 接口格式 */
type ApiFn<Req = any, Res = any> = (data?: Req) => ApiRes<Res> | Promise<ApiRes<Res>>;

/**接口统一响应结构 */
type ApiRes<T = any> = {
  code: number;
  data: T;
  message?: string;
};
