//需要单独文件 否则 是重复定义类型。
import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    icon?: string;
    title?: string;
    auths?: string[];
    hidden?: boolean;
  }
}
