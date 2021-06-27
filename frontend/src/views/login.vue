<template>
<div>
<NavAuth />
<form>
<div>
    <label for="email"></label>
    <input type="email" v-model="email" placeholder="  Votre Email" required>
  </div>
  <div>
    <label for="password"></label>
    <input  v-model="password" placeholder="  Votre mot de passe" type="password" name="password" required>
  </div>
  
  <input class="save" type="submit" v-on:click="getConnect" value="S'identifier">
 </form> 
 </div>
</template>

<style scoped lang="scss">
form{
  margin-top: 40%;
  border: white;
  box-shadow: 0px 5px 9px rgba(0, 0, 0, 0.527);
}
    input{
        &:invalid:not(:focus):not(:placeholder-shown) {
        background: pink;}
        font-size: 1.2em;
         margin:1em;
         width: 80%;
        }
     .save{
           background-color: green;
           color: white;
           border: none;
           border-radius: 3%;
         }   
</style>

<script>
import axios from "axios";
import NavAuth from "../components/NavAuth.vue";
export default {
  name: "Login",
  components: {
    NavAuth
  },
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
