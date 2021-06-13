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


export default {
  name: "Home",
  components: {
    BDD,
    POST,
  }}
</script>

<style lang="scss">
 body{
   margin: 0px;
   padding: 0px;
   background-color: grey;
   
 }
 
</style>