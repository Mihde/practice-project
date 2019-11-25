/* eslint-disable quotes */
/* eslint-disable semi */
/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  //  自定义验证规则 用户名只能是 admin editor 这两个
  const valid_map = ['admin', 'editor', 'admin001']
  return valid_map.indexOf(str.trim()) >= 0
}
