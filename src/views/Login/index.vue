<template>
  <div class="page_login">
    <div class="m-form__wrap">
      <el-form ref="refForm" label-width="50px" class="m-form" :model="form" @keydown.enter="onSubmit">
        <h1 class="m-title">系统登录</h1>
        <el-form-item class="m-form-item" prop="username" :rules="[{ required: true, message: `请输入用户名！` }]">
          <template #label>
            <span><el-icon name="user"></el-icon> </span>
          </template>
          <el-input v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item class="m-form-item" prop="username" :rules="[{ required: true, message: `请输入用户名！` }]">
          <template #label>
            <span><el-icon name="lock"></el-icon> </span>
          </template>
          <el-input v-model="form.password" type="password" autocomplete="off" show-password></el-input>
        </el-form-item>
        <el-button class="m-button" type="primary" @click="onSubmit"> 登录 </el-button>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { ElForm, ElFormItem, ElInput, ElButton } from "element-plus";
import "./index.scss";
import ElIcon from "@/components/ElIcon";
import { useStore } from "vuex";
import router from "@/router";
import { defineComponent } from "vue";
// interface Props {}
export default defineComponent({
  name: "Login",
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElButton,
    ElIcon,
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, cxt) {
    const store = useStore();
    const refForm = ref();
    const form = reactive({
      username: "admin",
      password: "11111",
    });
    const onSubmit = async () => {
      const isOk = await refForm.value.validate().catch(() => {});
      if (!isOk) return;
      const res = await (store.dispatch as DispatchFn<ReqDataLogin, ResDataLogin>)("user/fetchLogin");
      if (!res || res.code != 200) return;
      router.push("/");
    };

    return { refForm, form, onSubmit };
  },
});
</script>
<style lang="sass"></style>
