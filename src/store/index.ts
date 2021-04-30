import { createStore } from "vuex";
import user from "./user";
export default createStore({
  modules: { user },
  getters: {
    userAuth: (state: any) => state.user.userAuth,
  },
});
