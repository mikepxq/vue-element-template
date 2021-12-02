import { defineComponent, PropType } from "vue";
import { ElIcon } from "element-plus";
export default defineComponent({
  name: "SideItem",
  props: {
    iconNode: { type: Object as PropType<ElementPlus.IconProps> },
    title: { type: String as PropType<string> },
    class: { type: String as PropType<string> },
  },
  components: {},
  setup(props) {
    return () => (
      <>
        <div class={`${props.class}`}>
          {props.iconNode && <ElIcon>{<props.iconNode />}</ElIcon>}
          <span>{props.title}</span>
        </div>
      </>
    );
  },
});
