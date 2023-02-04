import MutationType from "./type/mutation-type"
const { LOGIN_MUTATION } = MutationType
const mutations = {
  [LOGIN_MUTATION]: (state, data) => {
    console.log(data)
    state.token = data
  }
}


export default mutations