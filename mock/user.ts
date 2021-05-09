import { MockMethod } from "vite-plugin-mock";
export default [
  {
    url: "/api/user/login",
    method: "post",
    response: () => {
      return {
        code: 200,
        data: {
          token: "tes-token",
          id: 1,
        },
      };
    },
  },
  {
    url: "/api/user/info",
    method: "post",
    response: {
      code: 200,
      data: {
        username: "admin",
      },
    },
  },
] as MockMethod[];
