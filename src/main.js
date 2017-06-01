import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'

// components
import Login from './components/Login.vue'
import Main from './components/Main.vue'
import About from './components/About.vue'
import Items from './components/Items.vue'
import Order from './components/Order.vue'

Vue.use(Vuetify)

// vue router
Vue.config.productionTip = false
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
    	path: "/login",
    	name: "Login",
    	component: Login
    },
    {
    	path: "/about",
    	name: "About",
    	component: About
    },
    {
    	path: "/items",
    	name: "Items",
    	component: Items
    },
    {
    	path: "/order",
    	name: "Order",
    	component: Order
    },
  ]
})

new Vue({
  el: '#app',
  name: "app",
  router,
  template: '<App/>',
  components: { App }
})

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })


