import { defineComponent } from "vue";
export default defineComponent({
  name: "Nested1",
  components: {},
  props: {
    // name: { type: String as PropType<string> },
  },
  setup(props) {
    return () => (
      <div>
        <h3>Nested-1</h3>
      </div>
    );
  },
});
