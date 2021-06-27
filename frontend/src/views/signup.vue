<template>
<div>
<NavAuth />
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
    <input type="password"  id="password" placeholder="  Votre mot de passe" v-model="password" required>
  </div>
  
  <input class="save" type="submit" value="S'enregistrer" v-on:click="post">
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
  name: "SignUp",
  components: {
    NavAuth
  },
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