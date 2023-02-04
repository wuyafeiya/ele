import instance from "@/utils/request";
/**
 * 
 * @param {} 登录 
 * @returns {}
 */

export const login =data => instance({ url: "/login", method: 'post', data })
