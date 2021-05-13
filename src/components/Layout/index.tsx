import vue, { defineComponent, ref, resolveComponent, h, Suspense, resolveDynamicComponent } from "vue";
import Side from "./Side";

import "./index.scss";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import Header from "./Header";
import Content from "./Content.vue";
export default defineComponent({
  name: "Layout",
  props: {
    // name: { type: String as PropType<string> },
  },
  components: {},
  setup(props, cxt) {
    //router
    const activePath = ref(useRoute().path);
    onBeforeRouteUpdate((to) => {
      activePath.value = to.path;
    });
    //
    const isOpenSide = ref(true);
    return () => (
      <div class="page_layout">
        <Side class=" m-scroll m-side" isOpenSide={isOpenSide.value}></Side>
        {/* header 折叠按钮 面包屑 */}
        <div class="m-main">
          <Header onChangeIcon={(isOpen) => (isOpenSide.value = isOpen)} isOpenSide={isOpenSide.value} />
          <Content />
        </div>
      </div>
    );
  },
});
