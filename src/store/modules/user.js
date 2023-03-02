import { getInfo } from "@/api/user"
import { getToken } from "@/utils/auth"
const state = {
  name: '',
  avatar: '',
  introduction: '',
  roles: []
}

const mutations = {
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  GET_INFO: async ({ commit, state }) => {
    const token = getToken()
    const { data: { data } } = await getInfo(token)
    const { roles, name, avatar, introduction } = data
    commit('SET_ROLES', roles)
    commit('SET_NAME', name)
    commit('SET_AVATAR', avatar)
    commit('SET_INTRODUCTION', introduction)
    return data
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}