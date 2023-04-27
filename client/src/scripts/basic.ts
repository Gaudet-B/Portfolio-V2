/**
 * ???
 *
 */
/**
 * getSessionStorageOrDefault
 * @description function that returns either a value from session or a default that is passed in
 * @param {string} key the key to look for in session
 * @param {any} defaultValue the return value if key is not found
 * @returns {string} defaultValue || value from session
 */
const getSessionStorageOrDefault = (key: string, defaultValue: any): string => {
  const stored = sessionStorage.getItem(key)
  if (!stored) return JSON.stringify(defaultValue)
  //   console.log(JSON.parse(stored))
  //   return JSON.parse(stored)
  return stored
}

const getWindowHeight = (window: any) => {
  return window.innerHeight
}

const getWindowWidth = (window: any) => {
  return window.innerWidth
}

export { getSessionStorageOrDefault, getWindowHeight, getWindowWidth }
