import Vue from 'vue'
import Router from 'vue-router'
//import Home from './views/Home/'
import App  from "./App.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'app',
      component: App
    }
  ]
})