import { ConsoleRoute, getIsAuthWithUserAuthOnRoute } from "@/router";
import { defineComponent, PropType, ref } from "vue";
import { onBeforeRouteUpdate, RouteRecordRaw, useRoute } from "vue-router";
import { useStore } from "vuex";
import { ElMenuItem, ElSubmenu, ElMenu } from "element-plus";
import SideItem from "./SideItem";
export default defineComponent({
  name: "App",
  props: {
    isOpenSide: { type: Boolean as PropType<boolean> },
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
            <ElSubmenu
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
            </ElSubmenu>
          );
        } else {
          return (
            <ElMenuItem index={route.path}>
              <SideItem
                class="m-side-item"
                iconName={route.meta && route.meta.icon}
                title={route.meta && route.meta.title}
                href={route.path}></SideItem>
            </ElMenuItem>
          );
        }
      });
    };
    //

    return () => {
      console.log("[props.isOpenSide ]", props.isOpenSide);

      return (
        <ElMenu
          collapse={!props.isOpenSide}
          default-active={activePath.value} //避免警示
          active-text-color="#ffd04b"
          background-color="#545c64"
          text-color="#fff"
          class="m-menu__vertical m-scroll">
          {ConsoleRoute.children && getSideMenuList(ConsoleRoute.children)}
        </ElMenu>
      );
    };
  },
});
