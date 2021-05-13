<template>
  <div class="m-content">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <component :is="Component" :key="route.path" />
        </keep-alive>
      </transition>
    </router-view>
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
