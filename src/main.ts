import { createApp } from "vue";
import App from "./App.vue";
import router from "@/routes/index";
import store from "@/store/index";
import { useElementPlus } from "@/plugin/index";
const app = createApp(App);
app.use(router).use(store);
useElementPlus(app);
app.mount("#app");
