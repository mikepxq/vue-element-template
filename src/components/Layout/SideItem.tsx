import { defineComponent, PropType } from "vue";
export default defineComponent({
  name: "SideItem",
  props: {
    iconName: { type: String as PropType<string> },
    title: { type: String as PropType<string> },
  },
  components: {},
  setup(props) {
    return () => (
      <>
        <i class={`el-icon-${props.iconName}`}></i>
        <span>{props.title}</span>
      </>
    );
  },
});
