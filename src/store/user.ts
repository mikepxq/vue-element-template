import { reqLogin, reqUserInfo } from "@/apis/index";
import { getToken, setToken } from "@/utils";

// setToken("0");
export default {
  namespaced: true,
  state() {
    return {
      token: getToken(),
      id: "",
      username: "",
      userAuth: "superAdmin",
    };
  },
  mutations: {
    SET_TOKEN(state: any, token: string) {
      state.token = token;
    },
    SET_ID(state: any, id: string) {
      state.id = id;
    },
    SET_USER_INFO(state: any, data: ResDataUserInfo) {
      Object.assign(state, data);
    },
  },
  actions: {
    /** */
    async fetchLogin({ commit }, data: ReqDataLogin) {
      const res = await reqLogin(data);
      //store 处理
      if (res && res.code == 200) {
        commit("SET_TOKEN", res.data.token);
        setToken(res.data.token);
        commit("SET_ID", res.data.id);
      }
      //留给页面处理
      return res;
    },
    async fetchUserInfo({ commit }, data: ReqDataUserInfo) {
      const res = await reqUserInfo(data);
      if (res && res.code == 200) {
        commit("SET_USER_INFO", res.data);
      }
      return res;
    },
  },
} as UserStore;
