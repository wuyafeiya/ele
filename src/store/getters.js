const getters = {
  token: state => state.token,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  sidebar:state=>state.app.sidebar
}

export default getters