import { computed, defineComponent, reactive, ref, watch } from "vue";
import { ConsoleRoute } from "@/router/index";
import { onBeforeRouteUpdate, RouteRecordRaw, useRoute } from "vue-router";
import SideItem from "./SideItem";
import "./index.scss";
import _Divider from "element-plus/lib/el-divider";
export default defineComponent({
  name: "Layout",
  props: {
    // name: { type: String as PropType<string> },
  },
  components: {},
  setup(props, cxt) {
    const activePath = ref(useRoute().path);
    onBeforeRouteUpdate((to) => {
      console.log("[to.path]", to.path);
      activePath.value = to.path;
    });
    /**获得 侧边栏列表 */
    const getSideMenuList = (routeList: RouteRecordRaw[]) => {
      return routeList.map((route) => {
        if (route.children && route.children.length > 0) {
          return (
            <el-submenu
              index={route.path}
              v-slots={{
                title: () => (
                  <>
                    <SideItem
                      class="m-side-item"
                      iconName={route.meta && route.meta.icon}
                      title={route.meta && route.meta.title}
                      href={route.path}></SideItem>
                  </>
                ),
              }}>
              {route.children && getSideMenuList(route.children)}
            </el-submenu>
          );
        } else {
          return (
            <el-menu-item index={route.path}>
              <SideItem
                class="m-side-item"
                iconName={route.meta && route.meta.icon}
                title={route.meta && route.meta.title}
                href={route.path}></SideItem>
            </el-menu-item>
          );
        }
      });
    };
    //

    return () => (
      <div class="page_layout">
        <el-menu
          default-active={activePath}
          active-text-color="#ffd04b"
          background-color="#545c64"
          text-color="#fff"
          class="m-menu__vertical">
          {ConsoleRoute.children && getSideMenuList(ConsoleRoute.children)}
        </el-menu>
        <div>
          <router-view key="/console/nested/nested-1"></router-view>
        </div>
      </div>
    );
  },
});
