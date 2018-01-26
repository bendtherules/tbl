export function isObject(value) {
  return value !== null && typeof value === 'object';
}

export function isCallable(value) {
  return typeof value === 'function';
}
