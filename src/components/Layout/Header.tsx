import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  props: {
    // name: { type: String as PropType<string> },
  },
  components: {},
  setup(props) {
    return () => <h1>App</h1>;
  },
});
