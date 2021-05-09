import { defineComponent, reactive, ref } from "vue";
import { ElForm, ElFormItem, ElInput, ElButton } from "element-plus";
import "./index.scss";
import ElIcon from "@/components/ElIcon";
import { useStore } from "vuex";
import { ReqDataLogin, ResDataLogin } from "@/store/user";
import router from "@/router";
export default defineComponent({
  name: "Login",
  props: {
    // name: { type: String as PropType<string> },
  },
  components: {},
  setup(props) {
    const store = useStore();
    const refForm = ref();
    const form = reactive({
      username: "admin",
      password: "11111",
    });
    return () => (
      <div class="page_login">
        <div class="m-form__wrap">
          <ElForm labelWidth="50px" class="m-form" model={form} ref={refForm}>
            <h1 class="m-title">系统登录</h1>
            <ElFormItem
              v-slots={{
                label: () => (
                  <span>
                    <ElIcon name="user"></ElIcon>
                    {/*   名称 */}
                  </span>
                ),
              }}
              class="m-form-item"
              prop="username"
              rules={[{ required: true, message: "请输入用户名！" }]}>
              <ElInput v-model={[form.username]} autocomplete="off"></ElInput>
            </ElFormItem>
            {/* 密码   */}
            <ElFormItem
              v-slots={{
                label: () => (
                  <span>
                    <ElIcon name="lock"></ElIcon>
                  </span>
                ),
              }}
              class="m-form-item"
              prop="password"
              rules={
                [
                  // { required: true, message: "请输入用户名！" }
                ]
              }>
              <ElInput v-model={[form.password]} type="password" autocomplete="off" show-password></ElInput>
            </ElFormItem>
            <ElButton
              class="m-button"
              type="primary"
              onClick={async (e) => {
                const isOk = await refForm.value.validate().catch(() => {});
                if (!isOk) return;
                const res = await (store.dispatch as DispatchFn<ReqDataLogin, ResDataLogin>)("user/fetchLogin");
                if (!res || res.code != 200) return;
                router.push("/");
              }}>
              登录
            </ElButton>
          </ElForm>
        </div>
      </div>
    );
  },
});
