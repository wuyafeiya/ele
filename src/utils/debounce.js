/**
 * 防抖函数
 * 
 */

 const debounce = (fn, wait = 50) => {
  let timer 
  return function (...args) {
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      fn.apply(this,args)
    }, wait);
  }
 }
export default debounce






