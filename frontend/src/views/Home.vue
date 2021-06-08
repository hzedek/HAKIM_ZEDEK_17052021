<template>
  <div class="home">
    <POST />
    <BDD />

  </div>
</template>

<script>
// @ is an alias to /src


import BDD from "@/components/BDD.vue";
import POST from "@/components/Post.vue";
import axios from "axios";


export default {
  name: "Home",
  components: {
    BDD,
    POST,
  },
  data(){
    return{
      info:""
    }
  },
 mounted(){
axios.get("http://localhost:4201/api/users/",{
        headers:{
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      .then(response=> console.log(this.info = response))
    }
  
};
</script>

<style lang="scss">
 body{
   margin: 0px;
   padding: 0px;
   background-color: grey;
   
 }
 
</style>