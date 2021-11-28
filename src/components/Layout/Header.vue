<script lang="ts">
export default { name: "LayoutHeader" };
</script>
<script setup lang="ts">
defineProps<{ isCollapseSide?: boolean; onChange: (value?: boolean) => void }>();
defineEmits<{ (e: "change", value?: boolean): void }>();
import BreadCrumb from "./BreadCrumb.vue";
import { ElIcon } from "element-plus";
import { Fold } from "@element-plus/icons";
</script>
<template>
  <header class="m-header">
    <nav class="m-nav__wrap">
      <ElIcon
        class="m-icon"
        :class="isCollapseSide ? 'collapse' : ''"
        @click="
          () => {
            $emit('change', !isCollapseSide);
            onChange && onChange(!isCollapseSide);
          }
        "
      >
        <Fold />
      </ElIcon>
      <BreadCrumb />
    </nav>
  </header>
</template>
