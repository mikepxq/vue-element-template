import vue, { defineComponent, ref, resolveComponent, h, Suspense, resolveDynamicComponent } from "vue";
import Side from "./Side";

import "./index.scss";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import Header from "./Header.vue";
import Content from "./Content.vue";
export default defineComponent({
  name: "Layout",
  components: {},
  props: {
    // name: { type: String as PropType<string> },
  },
  setup(props, cxt) {
    //router
    const activePath = ref(useRoute().path);
    onBeforeRouteUpdate((to) => {
      activePath.value = to.path;
    });
    //
    const isCollapseSide = ref(false);
    return () => (
      <div class="page_layout">
        <Side class=" m-scroll m-side" isCollapseSide={isCollapseSide.value}></Side>
        {/* header 折叠按钮 面包屑 */}
        <div class="m-main">
          <Header
            onChange={(isOpen) => (isCollapseSide.value = Boolean(isOpen))}
            isCollapseSide={isCollapseSide.value}
          />
          <Content />
        </div>
      </div>
    );
  },
});
