import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
  props: {
    // name: { type: String as PropType<string> },
  },
  components: {},
  setup() {
    return () => <h1>Home deving</h1>;
  },
});
