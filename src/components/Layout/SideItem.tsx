import { defineComponent, PropType } from "vue";
import { ElIcon } from "element-plus";
export default defineComponent({
  name: "SideItem",
  props: {
    iconNode: { type: Object as PropType<ElementPlus.IconProps> },
    title: { type: String as PropType<string> },
    href: { type: String as PropType<string> },
    class: { type: String as PropType<string> },
  },
  components: {},
  setup(props) {
    return () => (
      <>
        <router-link to={props.href} class={`${props.class}`}>
          {props.iconNode && <ElIcon>{<props.iconNode />}</ElIcon>}

          <span>{props.title}</span>
        </router-link>
      </>
    );
  },
});
