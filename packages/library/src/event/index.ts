/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable consistent-return */
export function throttle(fn: Function, delay: number = 200) {
  let lastCall = 0

  const throttleExec = (...args: unknown) => {
    const now = new Date().getTime()
    if (now - lastCall < delay) {
      return
    }
    lastCall = now
    return fn(...args)
  }
  return throttleExec
}
