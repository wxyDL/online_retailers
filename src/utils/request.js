// axios请求
import axios from 'axios'
import store from '@/store'
import router from '@/router'
// 多个地方需要用到跟地址，所以需要导出
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'

// 创建axios请求
const instance = axios.create({
//  请求的根地址
  baseURL: baseURL,
  timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(config => {
  // 获取用户信息对象
  const { profile } = store.state.user
  // 判断用户信息中是否有token
  if (profile.token) {
  // 设置token
    config.headers.Authorization = `Bearer ${profile.token}`
  }
  return config
}, err => {
  return Promise.reject(err)
})

// 响应拦截器
instance.interceptors.response.use(res => res.data, err => {
  // 处理401状态码
  if (err.response && err.response.status === 401) {
    // 清空无效用户信息
    store.commit('user/setUser', {})
    const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
    router.push('/login?redirectUrl=' + fullPath)
  }
  return Promise.reject(err)
})

// 请求工具函数
export default (url, method, submitData) => {
  return instance({
    url,
    method,
    // 如果是get请求传参就是用params反之使用data
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
