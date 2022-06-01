import { createRouter, createWebHashHistory } from 'vue-router'
// 路由懒加载
// 顶级路由
const Layout = () => import('@/views/layout')
// 首页
const Home = () => import('@/views/home')

// 配置路由规则
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: Home
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
