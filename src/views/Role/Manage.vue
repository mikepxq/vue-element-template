<script lang="ts">
export default { name: "RoleManage" };
</script>

<script setup lang="ts">
//import
import { reactive, ref } from "vue";
import { ElForm, ElFormItem, ElInput, ElButton } from "element-plus";
import { patternMap } from "@/model";

//props
defineProps<{ key?: string }>();
defineEmits<{ (e: "change", value?: string): void }>();

//let
const form = reactive({ roleName: "" });
const refForm = ref();
</script>
<template>
  <div class="role_manage">
    <ElForm :ref="refForm" v-model="form" inline class="m-form">
      <ElFormItem
        label="角色名称"
        prop="roleName"
        :rules="[
          {
            validator: () => patternMap.zh_alpha_num__.test(form.roleName),
            message: '请输入中文，英文字母和数字及下划线',
          },
        ]"
      >
        <ElInput v-model="form.roleName" placeholder="请输入角色名称"></ElInput>
      </ElFormItem>
      <ElFormItem></ElFormItem>
    </ElForm>
    <nav>
      <ElButton>新增</ElButton>
    </nav>
  </div>
</template>
