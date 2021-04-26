import { defineComponent } from "vue";
export default defineComponent({
  name: "Table",
  props: {
    // name: { type: String as PropType<string> },
  },
  components: {},
  setup(props) {
    return () => <h1>Table</h1>;
  },
});
