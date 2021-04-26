import { defineComponent } from "vue";
export default defineComponent({
  name: "Nested-1",
  props: {
    // name: { type: String as PropType<string> },
  },
  components: {},
  setup(props) {
    return () => (
      <div>
        <h3>Nested-1</h3>
      </div>
    );
  },
});
