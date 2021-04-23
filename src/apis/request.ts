import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "",
  timeout: 10000,
  // headers:{}
});
/**请求拦截 */
axiosInstance.interceptors.request.use(
  (config) => {
    /** */
    return config;
  },
  (err) => {}
);
/**响应拦截 */
axiosInstance.interceptors.response.use(
  (res) => {
    //减少一层级
    return res.data;
  },
  (err) => {}
);
/**get 方式请求 */
export const requestGet = (url: string, data?: any) => {
  return (axiosInstance({
    url,
    method: "get",
    params: data,
  }) as unknown) as ApiRes | Promise<ApiRes>;
};
export const requestPost = (url: string, data: any) => {
  return (axiosInstance({
    url,
    method: "post",
    data,
  }) as unknown) as ApiRes | Promise<ApiRes>;
};

/**参照：
 * https://www.kancloud.cn/yunye/axios/234845
 */
