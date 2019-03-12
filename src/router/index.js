import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'
import page1 from '@/page/page1'
import page2 from '@/page/page2'


Vue.use(Router)

export default new Router({
  base:'web',
  routes: [
    {
      path:'',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/page1',
      name: 'page1',
      component: page1
    },
    {
      path: '/page2',
      name: 'page2',
      component: page2
    }
  ]
})
