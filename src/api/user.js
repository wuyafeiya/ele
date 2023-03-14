import instance from "@/utils/request";
/**
 * 
 * @param {} 登录 
 * @returns {}
 */
export const controller = new AbortController();
export const login = data => instance({ url: "/login", method: 'post', data, signal: controller.signal })
/**s
 * 用户信息
 */
export const getInfo = token => instance({ url: "/user/info", method: 'get', params: { token } })



