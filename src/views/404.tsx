import { defineComponent } from "vue";
export default defineComponent({
  name: "404",
  components: {},
  props: {
    // name: { type: String as PropType<string> },
  },
  setup(props) {
    return () => <h1>404</h1>;
  },
});
