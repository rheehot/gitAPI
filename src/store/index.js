import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const GIT_API_URL = 'https://api.github.com/users/dogcolley';

export default new Vuex.Store({
  state: {
    config:{
      api:{
        git:GIT_API_URL,
      },
      git:{
        userId:'',

      }
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
