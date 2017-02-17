import blogApi from '../../api/blogApi'
import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  all: []
}

// getters
const getters = {
  allBlogs: state => state.all
}

// actions
const actions = {
  fetchBlogs ({ commit }) {
    blogApi.getSimple(blogs => {
      commit(types.GET_BLOGS_SIMPLE, { blogs })
    })
  }
}

// mutations
const mutations = {
  [types.GET_BLOGS_SIMPLE] (state, { blogs }) {
    state.all = blogs
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
