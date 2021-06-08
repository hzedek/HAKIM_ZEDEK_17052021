<template>
    <input type="text" placeholder="Type your GIF" v-model="keyword" v-on:click="search">
</template>

<script>
import axios from "axios";
export default {
    name:"Search",
    data(){
        return{
            keyword:"",
            timeout:null,
        }
    },
   methods:{
     /*  timeSearch(){
           let timeout=this.timeout;
           clearTimeout(timeout);
        timeout = setTimeout(()=>{
               this.search();
           }, timeout=500)
       },*/
       search(e){
           e.preventDefault();
          const keyword={keyword:this.keyword}
           axios.get(`https://api.giphy.com/v1/gifs/search?api_key=hcbliDOiKNH4fFQ4Dh4CiqkAIBulLtit&q=${keyword}&limit=9`)
           .then(res=>res.data)
           .then(result =>{ console.log(result);this.$emit('fetch-gifs', result.data)})
           
       }
   }
}
 //hcbliDOiKNH4fFQ4Dh4CiqkAIBulLtit
</script>