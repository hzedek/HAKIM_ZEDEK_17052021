
<template>
<form>
<div>
    <label for="email"></label>
    <input type="email" v-model="email" placeholder="  Votre Email" required>
  </div>
  <div>
    <label for="pseudo"></label>
    <input  id="pseudo" placeholder="  Votre pseudo" v-model="pseudo" required>
  </div>
  <div>
    <label for="password"></label>
    <input  id="password" placeholder="  Votre mot de passe" v-model="password" required>
  </div>
  
  <input type="submit" value="S'enregistrer" v-on:click="post">
 </form> 
</template>

<style scoped lang="scss">

    input{
        &:invalid:not(:focus):not(:placeholder-shown) {
        background: pink;
        }
        font-size: 1.5em;
         margin:1em;
        }
</style>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  data(){
    return{
      email:"",
      pseudo:"",
      password:"",
    }
  },
  
  methods:{
    post(e){
      e.preventDefault()
      const data ={  
      email:this.email,
      pseudo:this.pseudo,
      password:this.password,
    }

      axios.post("http://localhost:4201/api/users/signup", data)
      .then(res=> {console.log(res);})
      .catch(err => {console.log(err);})
      this.$router.push('/login');
    }
  }
};
</script>