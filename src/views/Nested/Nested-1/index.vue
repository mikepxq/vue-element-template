<script lang="ts">
export default { name: "Nested1" };
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
    <h3>Nested-1</h3>
  </div>
</template>
