import { defineComponent, PropType, reactive, ref } from "vue";
import BreadCrumb from "./BreadCrumb.vue";
export default defineComponent({
  name: "App",
  props: {
    isOpenSide: { type: Boolean as PropType<boolean> },
    onChangeIcon: {
      type: Function,
      default: () => {},
    },
  },
  components: {},
  setup(props) {
    //icon
    const Icon = () => {
      console.log("[props.isOpenSide h]", props.isOpenSide);
      return (
        <i
          class={`m-icon ${props.isOpenSide ? "el-icon-s-unfold" : "el-icon-s-fold"}`}
          onClick={() => {
            props.onChangeIcon(!props.isOpenSide);
          }}></i>
      );
    };
    //
    return () => (
      <header class="m-header">
        <nav class="m-nav__wrap">
          <Icon></Icon>
          <BreadCrumb />
        </nav>
      </header>
    );
  },
});
