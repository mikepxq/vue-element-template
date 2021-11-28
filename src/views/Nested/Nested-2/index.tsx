import { defineComponent } from "vue";
export default defineComponent({
  name: "Nested2",
  components: {},
  props: {
    // name: { type: String as PropType<string> },
  },
  setup(props) {
    return () => (
      <div>
        <h3>Nested-2</h3>
        <router-view></router-view>
      </div>
    );
  },
});
