import { reqUserGetInfoByGet, reqUserGetInfoByPost } from "@/apis/index";
import { getToken } from "@/utils";
export default {
  namespaced: true,
  state() {
    return {
      username: "",
      token: getToken(),
      userAuth: "superAdmin",
      getUsername: "",
      postUsername: "",
    };
  },
  mutations: {
    setGetUser(state: any, data: any) {
      state.getUsername = data;
    },
    setGetPost(state: any, data: any) {
      state.postUsername = data;
    },
  },
  actions: {
    /** */
    async fetchUserGetInfoByGet({ commit }) {
      const res = await reqUserGetInfoByGet();
      commit("setGetUser", res.data.username);
    },
    async fetchUserGetInfoByPost({ commit }) {
      const res = await reqUserGetInfoByPost({});
      commit("setGetPost", res.data.username);
    },
  },
};
