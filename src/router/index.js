import Vue from "vue";
import VueRouter from "vue-router";
import { getToken } from "@/utils/auth"
Vue.use(VueRouter);

export const constantRoutes = [
  {
    path: "/",
    redirect: '/layout'
  },
  {
    path: '/login',
    name: "login",
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@/views/layout')
  }
];

export const asyncRoutes = [
  {

  }
]
const router = new VueRouter({
  mode: "hash",
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
});

export default router;
