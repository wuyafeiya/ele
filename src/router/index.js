import Vue from "vue";
import VueRouter from "vue-router";
import { getToken } from "@/utils/auth"
Vue.use(VueRouter);

const routes = [
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

const router = new VueRouter({
  mode: "hash",
  routes,
});

router.beforeEach((to, from, next) => {
  const token = getToken('Admin-Token')
  if (to.path == '/login') {
    next()
  } else {
    if (token) {
      next()
    } else {
      next('/login')
    }
  }
  next()
})


export default router;
