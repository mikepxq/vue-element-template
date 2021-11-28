import { defineComponent } from "vue";
export default defineComponent({
  name: "Nested",
  components: {},
  props: {
    // name: { type: String as PropType<string> },
  },
  setup(props) {
    return () => (
      <div>
        <h2>Nested</h2>
        <router-view></router-view>
      </div>
    );
  },
});
