<template>
  <img alt="Vue logo" src="@/assets/logo.png" />
  <h1>test</h1>
  <div><router-link to="/login">to login</router-link></div>
  <p>
    <button @click="getUserGetInfoByGet">test get</button>
    <button @click="getUserGetInfoByPost">test post</button>
    <el-button>el button</el-button>
  </p>
  <p>
    <span>{{ getUsername }}</span>
    <span>{{ postUsername }}</span>
  </p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "@/styles/index.scss";
import { mapState } from "vuex";
export default defineComponent({
  name: "App",
  components: {},
  computed: {
    ...mapState("user", ["getUsername", "postUsername"]),
  },
  methods: {
    getUserGetInfoByGet() {
      this.$store.dispatch("user/fetchUserGetInfoByGet");
    },
    getUserGetInfoByPost() {
      this.$store.dispatch("user/fetchUserGetInfoByPost");
    },
  },
});
</script>
