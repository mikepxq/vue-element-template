<template>
  <ElBreadcrumb separator="/" class="b-bread-crumb">
    <TransitionGroup name="breadcrumb" appear>
      <ElBreadcrumbItem v-for="(item, index) in pathList" :to="{ path: item.path }" :key="`bread-item-${index}`">
        {{ item.meta.title }}
      </ElBreadcrumbItem>
    </TransitionGroup>
  </ElBreadcrumb>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { ElBreadcrumb, ElBreadcrumbItem } from "element-plus";
interface Props {}
export default defineComponent({
  name: "App",
  components: {
    ElBreadcrumb,
    ElBreadcrumbItem,
  },
  setup() {
    const pathList = ref(useRoute().matched);
    onBeforeRouteUpdate((to) => {
      pathList.value = to.matched;
    });
    return {
      pathList,
    };
  },
});
</script>
<style lang="sass"></style>
