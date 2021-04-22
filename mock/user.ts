import { MockMethod } from "vite-plugin-mock";
export default [
  {
    url: "/api/user/get-user-info-by-get",
    method: "get",
    response: () => {
      return {
        code: 200,
        data: {
          username: "test get",
        },
      };
    },
  },
  {
    url: "/api/user/get-user-info-by-post",
    method: "post",
    response: {
      code: 200,
      data: {
        username: "test post",
      },
    },
  },
] as MockMethod[];
