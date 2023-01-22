import Vue from "vue";
import VueRouter from "vue-router";
// import login from "@/views/login/login.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: 'login',
    component: () => import('@/views/login/login.vue')
  }
  
];

const router = new VueRouter({
  mode: "hash",
  routes,
});

export default router;
