import vue, { defineComponent, ref, resolveComponent, h, Suspense, resolveDynamicComponent } from "vue";
import Side from "./Side";

import "./index.scss";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import Main from "./Main.vue";
export default defineComponent({
  name: "Layout",
  props: {
    // name: { type: String as PropType<string> },
  },
  components: {},
  setup(props, cxt) {
    const activePath = ref(useRoute().path);
    onBeforeRouteUpdate((to) => {
      // console.log("[to.path]", to.path);
      activePath.value = to.path;
    });
    return () => (
      <div class="page_layout">
        <Side class=" m-scroll m-side"></Side>
        {/* header 折叠按钮 面包屑 */}
        <Main />
      </div>
    );
  },
});
