import { defineComponent, PropType } from "vue";
export default defineComponent({
  name: "Icon",
  props: {
    name: { type: String as PropType<string>, required: true },
    width: { type: Number as PropType<number>, default: 25 },
    height: { type: Number as PropType<number>, default: 25 },
  },
  components: {},
  setup(props) {
    return () => <i class={"el-icon-" + props.name}></i>;
  },
});
