// 用于记录保存token的js文件
import Cookie from 'js-cookie'

const tokenKey = 'appoint_admin'
const usernameKey = 'username'

export function getToken() {
  return Cookie.get(tokenKey)
}

export function getUsername() {
  return Cookie.get(usernameKey)
}

export function setToken(token) {
  return Cookie.set(tokenKey, token)
}

export function removeToken() {
  return Cookie.remove(tokenKey)
}
