import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { message } from '@/components/Message/index'
import './permission'
import '@/styles/index.scss'
import '@/icons/index'
import axios from 'axios'
import VueCompositionAPI from '@vue/composition-api'
Vue.prototype.$axios=axios
Vue.config.productionTip = false;
Vue.prototype.$Message = message
Vue.prototype.$EventBus = new Vue()
Vue.use(ElementUI)
Vue.use(VueCompositionAPI)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
