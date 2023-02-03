import Vue from "vue";
import VueRouter from "vue-router";
// import login from "@/views/login/login.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: 'home',
    component: () => import('@/views/layout')
  },
  {
    path: '/login',
    name: "login",
    component: () => import('@/views/login/login.vue')
  }
];

const router = new VueRouter({
  mode: "hash",
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(to)
  // 判断token
  // 判断是否是登录页面 如果是登录页面 直接跳转到登录页面
  if (to.path === '/') {
    next('/login')
  }
  next()
})

export default router;
