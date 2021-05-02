import { defineComponent } from "vue";
import Side from "./Side";
import "./index.scss";
export default defineComponent({
  name: "Layout",
  props: {
    // name: { type: String as PropType<string> },
  },
  components: {},
  setup(props, cxt) {
    return () => (
      <div class="page_layout">
        <Side class="m-menu__vertical m-scroll"></Side>
        <div>
          {/* header 折叠按钮 面包屑 */}
          <router-view key="/console/nested/nested-1"></router-view>
        </div>
      </div>
    );
  },
});
