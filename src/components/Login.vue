<template>
  <div class="U_login01">
    <div class="U_login01_con">
        <h2>여기에 제목</h2>
        <div>
          <input type="text" class="U_input01" v-model="userName">
          <button type="button" @click="userSet">전송하기</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: function(){
    return{
      userName : ''
    }
  },
  methods:{
    userSet(){
      console.log('유저이름셋');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
