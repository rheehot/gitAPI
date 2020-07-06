import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const GIT_API_URL = 'https://api.github.com/users/dogcolley';

export default new Vuex.Store({
  state: {
    api:{
        git:GIT_API_URL,
    },
    git:{
      UserInfo:{
        
      }
    },
    userId:'',
    loding:false,
    login:false,
  },
  mutations: {
    //상태값 변화
  },
  actions: {
    //이벤트
  },
  modules: {
    //x
  }
})
