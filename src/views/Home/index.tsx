import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
  components: {},
  props: {
    // name: { type: String as PropType<string> },
  },
  setup() {
    return () => <h1>Home deving</h1>;
  },
});
