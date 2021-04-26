import { defineComponent } from "vue";
export default defineComponent({
  name: "Nested-2-1",
  props: {
    // name: { type: String as PropType<string> },
  },
  components: {},
  setup(props) {
    return () => (
      <div>
        <h4>Nested-2-1</h4>
      </div>
    );
  },
});
