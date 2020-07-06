<template>
  <div id="app"> 
    <Loding v-if="!loding"/>
    <Login v-if="loding" />
    <Content v-if="loding"/>
  </div>
</template>

<script>
//import axios from 'axios';
//<img alt="Vue logo" class="U_log_vue01" src="./assets/logo.png">

import Login from '@/components/Login';
import Loding from '@/components/Loding';
import Content from '@/components/Content';

export default {
  name: 'App',
  /*
  data: function(){

  },
  */
  computed:{
      loding(){
        return this.$store.state.loding;
      } 
  },
  components: {
    Login,
    Loding,
    Content
  },
  created:function(){
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.U_log_vue01{max-width:20px}
</style>
