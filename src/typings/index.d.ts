/**统一响应结构 */
type ApiRes<T = any> = {
  code: number;
  data: T;
  message?: string;
};
