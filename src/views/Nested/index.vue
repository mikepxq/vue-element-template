<script lang="ts">
export default { name: "Nested" };
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
    <h2>Nested</h2>
    <router-view></router-view>
  </div>
</template>
