import Vue from "vue";
import VueRouter from "vue-router";
import layout from '@/layout'
import documetRouter from './modules/document'
import componentsRouter from './modules/components'
import UploadFile from './modules/Uploadfile'
import CssLayout from './modules/CssLayout'
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
  componentsRouter,
  UploadFile,
  CssLayout
];

export const asyncRoutes = [
]

const router = new VueRouter({
  mode: "hash",
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
});

export default router;
