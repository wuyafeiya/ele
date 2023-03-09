import router  from "./router";
import store from "./store";
import NProgress from "nprogress";
import 'nprogress/nprogress.css'
import { getToken } from "./utils/auth";

NProgress.configure({ showSpinner: false })

const whiteList = [ '/login', '/auth-redirect']
router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (hasRoles) {
        next()
        NProgress.done()
      } else {
        try {
          const { roles } = await store.dispatch('user/GET_INFO')
          const accessedRoutes = await store.dispatch('permission/generateRoutes', roles)
          //router.addRoute(...accessedRoutes)
          next({...to,replace:true})
        } catch (err) {
          console.log(err)
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next({ path: '/login' })
    }
    NProgress.done()
  }
})
