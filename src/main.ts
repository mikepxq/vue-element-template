import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/index";
import store from "@/store/index";
import "./styles/index.scss";
import "element-plus/packages/theme-chalk/src/base.scss";
import "./auth";

const app = createApp(App);
app.use(router).use(store);
app.mount("#app");
