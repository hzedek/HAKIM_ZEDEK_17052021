<template>
<article>
<div class="contents" v-bind:key="content" v-for="content in contents">
    <p class="content">Pseudo</p>
    <p>{{content.createdAt}}</p>
    <p class="content black" >{{content.title}}</p>
  <p class="content">{{content.multimedia}}</p>
  <p class="content">{{content.text}}</p>
  <input type="button" value="Commenter">
  </div>
</article>
</template>

<script>
import axios from "axios";

export default {
  name: "BDD",
  data() {
    return {
      contents:[]
    }
  },
 async mounted() {
    
  await axios.get("http://localhost:4201/api/contents")
      .then((res) => {
        this.contents=res.data;
      })
      .catch((err) => {
        this.data = console.log(err);
      });
  },
};
</script>

 <style scoped lang="scss">
 .contents{
   border: 2px solid  transparent;
   background-color: rgb(189, 189, 189);
   margin-top: 1.2em;
   border-radius: 10px;
   box-shadow:0px 5px 9px rgba(0, 0, 0, 0.527);
   
   :first-child{
     color: black;
     font-weight:bold;
   }
   .black{
     color: black;
     font-size: 1.2em;
   }
     .content{
     margin-left: 20px;
     display: flex;
   }
   input{
     border:none;
     background-color: rgb(189, 189, 189);
     font-weight: bold;
     font-size: 1.1em;
     color:white;
   }
 }
</style>