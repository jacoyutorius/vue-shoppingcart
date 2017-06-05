import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import auth from './auth'

// components
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Items from './components/Items.vue'
import ItemDetail from './components/ItemDetail.vue'
import Order from './components/Order.vue'

Vue.use(Vuetify)

// vue router
Vue.config.productionTip = false
Vue.use(Router)


function requireAuth (to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: requireAuth
    },
    {
    	path: "/about",
    	name: "About",
    	component: About,
      beforeEnter: requireAuth
    },
    {
    	path: "/items",
    	name: "Items",
    	component: Items,
      beforeEnter: requireAuth
    },
    {
      path: "/item/:id",
      name: "ItemDetail",
      component: ItemDetail,
      beforeEnter: requireAuth
    },
    {
    	path: "/order",
    	name: "Order",
    	component: Order,
      beforeEnter: requireAuth
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/logout",
      name: "Logout",
      beforeEnter (to, from, next) {
        auth.logout()
        next('/login')
      }
    }
  ]
})

new Vue({
  el: '#app',
  name: "app",
  router,
  template: '<App/>',
  components: { App }
})


