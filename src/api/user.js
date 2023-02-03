import instance from "@/utils/request";
/**
 * 
 * @param {} 登录 
 * @returns {}
 */
export const login = data => instance({ url: "/vue-element-admin/user/login", method: 'post', data })
