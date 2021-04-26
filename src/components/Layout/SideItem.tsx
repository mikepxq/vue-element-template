import { defineComponent, PropType } from "vue";
export default defineComponent({
  name: "SideItem",
  props: {
    iconName: { type: String as PropType<string> },
    title: { type: String as PropType<string> },
    href: { type: String as PropType<string> },
    class: { type: String as PropType<string> },
  },
  components: {},
  setup(props) {
    return () => (
      <>
        <router-link to={props.href} class={`${props.class}`}>
          <i class={`el-icon-${props.iconName}`}></i>
          <span>{props.title}</span>
        </router-link>
      </>
    );
  },
});
