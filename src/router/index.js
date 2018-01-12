import Vue from 'vue'
import Router from 'vue-router'
import Store from '../components/Store'
import Cart from '../components/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Store',
      component: Store
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
