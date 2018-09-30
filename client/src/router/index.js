import Vue from 'vue'
import Router from 'vue-router'
import Main from '../pages/Main'
import AddScenario from '../pages/add-scenario'
import Login from '../pages/login'
import ScenarioName from '../pages/scenario-drawer/scenario-name'
import Things from '../pages/scenario-drawer/things-table'
import ScenarioNumber from '../pages/scenario-drawer/scenario-number'
import ExitNumber from '../pages/scenario-drawer/exit-number'
import DefineScenario from '../pages/scenario-drawer/define-scenario'
import CheckScenario from '../pages/scenario-drawer/check-scenario'

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
    },
    {
      path: '/scenario-name',
      name: 'Scenario Name',
      component: ScenarioName
    },
    {
      path: '/things-table',
      name: 'things',
      component: Things,
      props: true
    },
    {
      path: '/scenario-number',
      name: 'scenario-number',
      component: ScenarioNumber,
      props: true
    },
    {
      path: '/exit-number/:state',
      name: 'exit-number',
      component: ExitNumber,
      props: true
    },
    {
      path: '/define-scenario/:inState',
      name: 'define-scenario',
      component: DefineScenario,
      props: true
    },
    {
      path: '/check-scenario',
      name: 'check-scenario',
      component: CheckScenario,
      props: true
    }
  ]
})
