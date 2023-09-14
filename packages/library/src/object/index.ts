export function deepCloneObject(obj: unknown) {
  if (typeof obj !== 'object') {
    return undefined
  }

  return JSON.parse(JSON.stringify(obj))
}

export function isEmptyObject(obj: unknown) {
  return obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype
}
