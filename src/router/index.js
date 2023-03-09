import Vue from "vue";
import VueRouter from "vue-router";
import { getToken } from "@/utils/auth"
import layout from '@/layout'
import documetRouter from './modules/document'
import componentsRouter from './modules/components'
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
        meta: { title: 'Dashboard', icon: 'boluo', affix: true }
      }
    ]
  },
  documetRouter,
  componentsRouter
];

export const asyncRoutes = [
]

const router = new VueRouter({
  mode: "hash",
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
});

export default router;
