import { defineComponent } from "vue";
export default defineComponent({
  name: "404",
  props: {
    // name: { type: String as PropType<string> },
  },
  components: {},
  setup(props) {
    return () => <h1>404</h1>;
  },
});
