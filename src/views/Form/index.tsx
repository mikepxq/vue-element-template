import { defineComponent } from "vue";
export default defineComponent({
  name: "Form",
  components: {},
  props: {
    // name: { type: String as PropType<string> },
  },
  setup(props) {
    return () => <h1>Form</h1>;
  },
});
