<template>
    <input type="text" placeholder="Type your GIF" v-model="keyword" v-on:keyup="search">
</template>

<script>
import axios from "axios";
export default {
    name:"Search",
    data(){
        return{
            keyword:"",
        }
    },
   methods:{
       search(){
          
           axios.get(`https://api.giphy.com/v1/gifs/search?api_key=hcbliDOiKNH4fFQ4Dh4CiqkAIBulLtit&q=${this.keyword}&limit=9`)
           .then(res=>res.data)
           .then(result =>{this.$emit('fetch-gifs', result.data)})
           
       }
   }
}
</script>