/**
 * 节流
 */

const throttle = (fn,wait=50) => {
  let previous = 0
  return function (...args) {
    let now = +new Date()
    if (now - previous > wait) {
      previous = now
      fn.apply(this.args)
    }
  }
}

export default throttle