import actions_type from "./type/action-type"
import MutationType from "./type/mutation-type"
import { setToken } from "@/utils/auth"
import { login } from "@/api/user"
const {LOGIN_MUTATION} =MutationType
const { LOGIN_ACTION } = actions_type

const actions = {
  [LOGIN_ACTION]: async ({ commit }, data) => {
    const { data: { token } } = await login(data)
    setToken(token)
    commit(LOGIN_MUTATION, token)
  }
}

export default actions