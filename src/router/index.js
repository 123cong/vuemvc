import Vue from 'vue'
import Router from 'vue-router'
import Mvc from '../components/mvc.vue'
import List from '../components/list.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mvc',
      component: Mvc,
      children:[
        {
          path:'/list',
          component:List
        },
      ]
    }
  ]
})
