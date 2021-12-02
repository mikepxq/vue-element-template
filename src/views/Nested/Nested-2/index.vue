<script lang="ts">
export default { name: "Nested2" };
</script>

<script setup lang="ts">
//import

//props
defineProps<{ key?: string }>();
defineEmits<{ (e: "change", value?: string): void }>();

//let
</script>

<template>
  <div>
    <h3>Nested-2</h3>
    <router-view></router-view>
  </div>
</template>
