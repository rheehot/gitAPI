<template>
  <div class="U_login">
    <div class="U_login01_con U_ct_box01 T_wd_full">
      <div>
         <div class="U_login_from">
          <h2 class="U_ft_cfff T_ds_block T_ft_rem25">
            <img :src="require('@/assets/GitHub_Logo_White.png')" alt="로그인">
            <span class="T_ds_inbl">&amp; 잔디방</span>
          </h2>
          <div>
            <input type="text" class="U_input01" v-model="userName">
            <button type="button" @click="userSet"> <img :src="require('@/assets/GitHub-Mask-Dark.png')" alt="로그인"></button>
          </div>
          <p class="U_ft_cfff U_ft_ct U_login_info T_ft_rem9hf">{{loginInfo}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: function(){
    return{
      userName : '',
      loginInfo: '깃허브 계정을 입력해보세요!'
    }
  },
  methods:{
    userSet(){
      if(this.userName !== ''){
        this.$store.commit('LOGIN',this.userName);
      }else{
        this.loginInfo = '아이디를 입력해주세요!';
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .U_login{width:100%;height:100%}
  .U_login_from{max-width:400px;margin:0 auto;text-align: center;}
  .U_login_from h2 img{max-width: 150px;}
  .U_login_from h2 span{vertical-align: middle;font-weight: 300;}

  .U_login_from div {margin-top:60px;position: relative;}
  .U_login_from div input{width:100%;height:55px;border:0;padding:0 80px 0 20px;transition: 1s all;}
  .U_login_from div input:focus{color:#000}
  .U_login_from div button{width:40px;height:40px;position:absolute;right:4.5%;top:50%;margin-top:-20px;transform: rotate(0deg);transition: 0.7s;}
  .U_login_from div button:hover{transform: rotate(360deg);}
  .U_login_from div img{width:100%;}
  .U_login_info{margin-top:20px}
</style>
