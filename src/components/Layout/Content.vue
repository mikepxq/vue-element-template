<template>
  <div class="m-content">
    <RouterView v-slot="{ Component, route }">
      <Transition name="fade" mode="out-in">
        <KeepAlive>
          <component :is="Component" :key="route.path" />
        </KeepAlive>
      </Transition>
    </RouterView>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
interface Props {}
export default defineComponent({
  name: "App",
});
</script>
<style lang="sass"></style>
