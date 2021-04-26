import { defineComponent } from "vue";
export default defineComponent({
  name: "Nested-2",
  props: {
    // name: { type: String as PropType<string> },
  },
  components: {},
  setup(props) {
    return () => (
      <div>
        <h3>Nested-2</h3>
        <router-view></router-view>
      </div>
    );
  },
});
