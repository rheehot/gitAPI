import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);

const V1GITAPIURL = 'https://github-contributions-api.now.sh/v1/';
const V3GITAPIURL = 'https://api.github.com/users/';

export default new Vuex.Store({
  state: {
    git:{
      V1:{},
      V3:{}
    },
    userId:'',
    loding:false,
    lodingAction:false,
    login:false,
    loginTry: false,
  },
  mutations: {
    //상태값 변화
    LOGIN (state,userId){
      //console.log('로그인',userId);
      state.lodingAction = false;
      state.loding = false;
      this.dispatch('LOGINLODING',userId);
    },
    V1SET (state,data){
      state.git.V1 = data;
    },
    V3SET (state,data){
      state.git.V3 = data;
    }
  },
  actions: {
    //이벤트
    async V1CONACTION(state,USERID){
      await axios.get(V1GITAPIURL+USERID).then(data=>{
        console.log('V1',data);
        this.commit('V1SET',data);
      }).catch(err=>{
        console.log(err);
      });
    },
    async V3CONACTION(state,USERID){
      await axios.get(V3GITAPIURL+USERID).then(data=>{
        console.log('V3',data);
        this.commit('V3SET',data);
      }).catch(err=>{
        console.log(err);
      });
    },
    async LOGINLODING({dispatch,state},userId){
      await dispatch('V1CONACTION',userId);
      await dispatch('V3CONACTION',userId).then(function(){

        try{
          if(state.git.V3.data.login){
            state.userId = userId;
          }
        }catch{
          state.loginTry = true;
        }
        setTimeout(() => {
          state.loding = true;
        },1000);
      });
    }
  },
  modules: {
    //x
  }
})
