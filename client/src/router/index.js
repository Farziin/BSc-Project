import Vue from 'vue'
import Router from 'vue-router'
import Main from '../pages/Main'
import AddScenario from '../pages/add-scenario'
import Login from '../pages/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main Page',
      component: Main
    },
    {
      path: '/add-scenario',
      name: 'Add Scenario Page',
      component: AddScenario
    },
    {
      path: '/login',
      name: 'Login Page',
      component: Login
    }
  ]
})
