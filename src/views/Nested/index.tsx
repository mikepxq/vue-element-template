import { defineComponent } from "vue";
export default defineComponent({
  name: "Nested",
  props: {
    // name: { type: String as PropType<string> },
  },
  components: {},
  setup(props) {
    return () => (
      <div>
        <h2>Nested</h2>
        <router-view></router-view>
      </div>
    );
  },
});
