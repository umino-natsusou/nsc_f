import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'nsc',
      path: '/',
      component: r => require.ensure([], () => r(require('../pages/')), 'nsc')
    }
  ]
})
