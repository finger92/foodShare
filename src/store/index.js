import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import blog from './modules/blog'
import cart from './modules/cart'
import products from './modules/products'
import createLogger from '../plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    blog,
    cart,
    products
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
