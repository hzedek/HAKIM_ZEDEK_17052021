<template>
<article>
  <router-link to="/post">
<button>  Ajouter du contenu </button>
</router-link> 
</article>
</template>

<script>
import axios from "axios";

export default {
  name: "POST",
    data(){
    return{
      title:"",
      text:"",
      multimedia:"",
    }
  },
  
  methods:{
    post(e){
      e.preventDefault()
      const data ={  
      title:this.title,
      text:this.text,
      multimedia:this.multimedia,
    }

      axios.post("http://localhost:4201/api/contents", data)
      .then(res=> {console.log(res);})
      .catch(err => {console.log(err);})
    }
  }}
</script>

<style lang="scss" scoped>
button{
  font-weight: bold;
  border: none;
  margin-top: 1.1em;
  border-radius: 15%;
  font-size: 1.1em;
  padding: 0.5em;
  background-color: white;
  &:hover{
    color: blue;
  }
}
</style>