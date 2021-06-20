<template>
<article>
<div>
    <label for="email"></label>
    <input type="email" v-model="email" placeholder="  Votre Email" required>
  </div>
  <div>
    <label for="password"></label>
    <input  v-model="password" placeholder="  Votre mot de passe" type="password" name="password" required>
  </div>
  
  <input type="submit" v-on:click="getConnect" value="S'identifier">
 </article> 
</template>

<style scoped lang="scss">
#formLogin{

    input{
        &:invalid:not(:focus):not(:placeholder-shown) {
        background: pink;
        }
        font-size: 1.5em;
         margin:1em;
        }
}
</style>

<script>
import axios from "axios";
export default {
  name: "Login",
  data(){
    return{
      email:"",
      password:""
    }
  },
  methods:{
    async getConnect(e){
    e.preventDefault()
    const data ={  
      email:this.email,
      password:this.password,
    }
  const response = await axios.post("http://localhost:4201/api/users/login",data)
  localStorage.setItem('token', response.data.token);
  localStorage.setItem('userId', response.data.userId);
  this.$router.push('/');
  }}
  
};
</script>
