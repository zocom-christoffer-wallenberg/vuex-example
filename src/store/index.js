import Vue from 'vue'
import Vuex from 'vuex'
import ModuleA from './modules/module'
import Cart from './modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    belong: ModuleA,
    cart: Cart
  }
})
