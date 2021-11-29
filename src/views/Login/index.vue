<script lang="ts">
export default { name: "Login" };
</script>

<script setup lang="ts">
//import
import { reactive, ref } from "vue";
import { ElForm, ElFormItem, ElInput, ElButton, ElIcon } from "element-plus";
import "./index.scss";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { appMessage } from "@/plugin";
import { Lock, UserFilled } from "@element-plus/icons";
//props
defineProps<{ key?: string }>();
defineEmits<{ (e: "change", value?: string): void }>();

//let
const store = useStore();
const refForm = ref();
const form = reactive({
  username: "superAdmin",
  password: "superAdmin",
});
let router = useRouter();
let loading = ref(false);
const onSubmit = async () => {
  const isOk = await refForm.value.validate().catch(() => {});
  if (!isOk || loading.value) return;
  loading.value = true;
  const res = await (store.dispatch as DispatchFn<ReqDataLogin, ResDataLogin>)("user/fetchLogin", form);
  loading.value = false;
  if (!res || res.code != 200) return appMessage.error(res.message || "登录失败！");
  appMessage.success(res.message || "登录成功！");
  router.push("/");
};
</script>

<template>
  <div class="page_login">
    <div class="m-form__wrap">
      <el-form ref="refForm" label-width="50px" class="m-form" :model="form" @keydown.enter="onSubmit">
        <h1 class="m-title">系统登录</h1>
        <el-form-item class="m-form-item" prop="username" :rules="[{ required: true, message: `请输入用户名！` }]">
          <template #label>
            <el-icon><user-filled /></el-icon>
          </template>
          <el-input v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item class="m-form-item" prop="password" :rules="[{ required: true, message: `请输入密码！` }]">
          <template #label>
            <el-icon><lock /></el-icon>
          </template>
          <!-- bug 2 icon-->
          <el-input v-model="form.password" type="password" autocomplete="off" show-password></el-input>
        </el-form-item>
        <el-button :loading="loading" class="m-button" type="primary" @click="onSubmit"> 登录 </el-button>
      </el-form>
    </div>
  </div>
</template>
