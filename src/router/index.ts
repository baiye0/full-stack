import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/home/index.vue"), // 懒加载组件
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"), // 懒加载组件
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
