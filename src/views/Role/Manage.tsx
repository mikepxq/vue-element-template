import { defineComponent, reactive, ref } from "vue";
import { ElForm, ElFormItem, ElInput, ElButton } from "element-plus";
import { patternMap } from "@/model";

const s = 0;
export default defineComponent({
  name: "RoleManage",
  components: {},
  props: {
    // name: { type: String as PropType<string> },
  },
  setup() {
    const form = reactive({
      roleName: "",
    });
    const refForm = ref();
    return () => (
      <div class="role_manage">
        {form.roleName}
        {JSON.stringify(form)}
        <ElForm inline v-model={form} class="m-form" ref={refForm}>
          <ElFormItem
            label="角色名称"
            prop="roleName"
            rules={[
              {
                validator: () => patternMap.zh_alpha_num__.test(form.roleName),
                message: "请输入中文，英文字母和数字及下划线",
              },
            ]}>
            <ElInput placeholder="请输入角色名称" v-model={form.roleName}></ElInput>
          </ElFormItem>
          <ElFormItem></ElFormItem>
        </ElForm>
        <nav>
          <ElButton>新增</ElButton>
        </nav>
      </div>
    );
  },
});
