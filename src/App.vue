<template>
  <div id="app">    
    <Login />
  </div>
</template>

<script>
//import axios from 'axios';
//<img alt="Vue logo" class="U_log_vue01" src="./assets/logo.png">

import Login from '@/components/Login';


export default {
  name: 'App',
  data: function(){
    return {
      user: ''
    }
  },
  components: {
    Login
  },
  created:function(){
    //axios.get(this.$store.state.api_url_git);
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
