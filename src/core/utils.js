export function getEventType(string) {
  if (typeof string !== 'string') {
    return ''
  }
  return `on` + string.charAt(0).toUpperCase() + string.slice(1)
}
