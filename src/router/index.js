import Vue from 'vue'
import Router from 'vue-router'
import Mvc from '../components/Mvc.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Mvc',
      component: Mvc
    }
  ]
})
