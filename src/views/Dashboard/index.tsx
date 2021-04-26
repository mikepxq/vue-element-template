import { defineComponent } from "vue";
export default defineComponent({
  name: "dashboard",
  props: {
    // name: { type: String as PropType<string> },
  },
  components: {},
  setup(props) {
    return () => <h1>dashboard</h1>;
  },
});
