import Vue from "vue";
import Vuex from "vuex";
import getters from './getters'
import state from './state'
import mutations from './mutations'
import actions from './action'
import user from '@/store/modules/user'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user
  },
  state,
  mutations,
  getters,
  actions
});
