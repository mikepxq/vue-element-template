import { defineComponent } from "vue";
export default defineComponent({
  name: "Form",
  props: {
    // name: { type: String as PropType<string> },
  },
  components: {},
  setup(props) {
    return () => <h1>Form</h1>;
  },
});
