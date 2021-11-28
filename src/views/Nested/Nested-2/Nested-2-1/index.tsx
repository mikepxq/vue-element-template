import { defineComponent } from "vue";
export default defineComponent({
  name: "Nested21",
  components: {},
  props: {
    // name: { type: String as PropType<string> },
  },
  setup(props) {
    return () => (
      <div>
        <h4>Nested-2-1</h4>
      </div>
    );
  },
});
