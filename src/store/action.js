import actions_type from "./type/action-type"
import { setToken } from "@/utils/auth"
import { login } from "@/api/user"
const { LOGIN_ACTION } = actions_type
const actions = {
  [LOGIN_ACTION]: async ({ commit }, data) => {
    const { data: { token } } = await login(data)
      setToken(token)
      commit(LOGIN, token)
  }
}

export default actions