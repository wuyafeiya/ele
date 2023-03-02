import Vue from "vue";
import VueRouter from "vue-router";
import { getToken } from "@/utils/auth"
import layout from '@/layout'
Vue.use(VueRouter);
export const constantRoutes = [
  {
    path: '/login',
    name: "login",
    component: () => import('@/views/login/login.vue'),
    hidden:true
  },
  {
    path: '/',
    component: layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },
];

export const asyncRoutes = [
  {
    path: '/tab',
    component: layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/tab/index.vue'),
        name: 'Tab',
        meta: { title: 'Tab', icon: 'tab' }
      }
    ]
  },
]

const router = new VueRouter({
  mode: "hash",
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
});

export default router;
