import { computed, defineComponent, reactive, ref, watch } from "vue";
import { ConsoleRoute, getIsAuthWithUserAuthOnRoute } from "@/router/index";
import { onBeforeRouteUpdate, RouteRecordRaw, useRoute } from "vue-router";
import SideItem from "./SideItem";
import "./index.scss";
import { useStore } from "vuex";
export default defineComponent({
  name: "Layout",
  props: {
    // name: { type: String as PropType<string> },
  },
  components: {},
  setup(props, cxt) {
    const activePath = ref(useRoute().path);
    onBeforeRouteUpdate((to) => {
      // console.log("[to.path]", to.path);
      activePath.value = to.path;
    });
    const {
      getters: { userAuth },
    } = useStore();
    /**获得 侧边栏列表 */
    const getSideMenuList = (routeList: RouteRecordRaw[]) => {
      return routeList.map((route) => {
        //有权限 并且没隐藏
        //可以继续判断 没有组件 没有重定向
        const isShow = getIsAuthWithUserAuthOnRoute(userAuth, route) && !route.meta?.hidden;
        if (!isShow) return "";

        const isHasChildren =
          route.children &&
          route.children.filter((cRoute) => {
            return getIsAuthWithUserAuthOnRoute(userAuth, cRoute) && !cRoute.meta?.hidden;
          }).length > 0;
        //没有权限 或者 隐藏
        if (isHasChildren) {
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
          default-active={activePath.value} //避免警示
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
