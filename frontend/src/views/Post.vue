<template>
<article>
<div>
    <label for="title"></label>
    <input type="text" v-model="title" placeholder="  Votre titre" >
  </div>
  <div>
    <label for="text"></label>
    <input class="text" v-model="text"  type="text" name="text" placeholder="  ecrivez quelque chose" >
  </div>
  <Search @fetch-gifs="onFetch"/>
  <Gif-list :gifs="gifs"/>
  
  <input type="submit" v-on:click="post" value="Poster">
 </article> 
</template>

<style lang="scss" scoped>
.text{
height: 50px;
width:200px;
}
</style>

<script>

import axios from "axios";
import Search from '../components/Search.vue';
import GifList from '../components/GifList.vue';

export default {
  components: { Search, GifList },
  name: "Post",
    data(){
    return{
      title:"",
      text:"",
      multimedia:"",
      gifs:[],
    }
  },
  
  methods:{
   async post(e){
      e.preventDefault()
      const data ={  
      title:this.title,
      text:this.text,
      multimedia:this.multimedia,
      gifs:this.gifs,
    }

    await  axios.post("http://localhost:4201/api/contents", data)
      .then(res=> {console.log(res)})
      .catch(err => {console.log(err);})
      this.$router.push('/');
      
    },
    onFetch(result){
      this.gifs=result;
    }
  }}
</script>