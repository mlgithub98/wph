import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import child from "../pages/child.vue"
import childMilk from "../pages/childMilk.vue"
import childFiltr from "../pages/childFiltr.vue"
  
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      component: child
    },
    {
      path: '/child',
      component: child
    },
    {
      path:"/childMilk",
      component:childMilk
    },
    {
      path:"/childFiltr",
      component:childFiltr
    }
  ]
})
