import Vue from "vue";
import Vuex from "vuex";
import getters from './getters'
import state from './state'
import mutations from './mutations'
import actions from './action'
import user from '@/store/modules/user'
import permission from '@/store/modules/permission'
import app from '@/store/modules/app'
import tagsView from '@/store/modules/tagsView'


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    permission,
    app,
    tagsView
  },
  state,
  mutations,
  getters,
  actions
});
