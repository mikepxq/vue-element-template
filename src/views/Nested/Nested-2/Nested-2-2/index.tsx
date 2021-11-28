import { defineComponent } from "vue";
export default defineComponent({
  name: "Nested22",
  components: {},
  props: {
    // name: { type: String as PropType<string> },
  },
  setup(props) {
    return () => (
      <div>
        <h4>Nested-2-2</h4>
      </div>
    );
  },
});
