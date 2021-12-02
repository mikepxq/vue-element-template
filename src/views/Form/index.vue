<script lang="ts">
export default { name: "Form" };
</script>

<script setup lang="ts">
//import

//props
defineProps<{ key?: string }>();
defineEmits<{ (e: "change", value?: string): void }>();

//let
</script>

<template>
  <h1>Form</h1>
</template>
