<template>

  <div class="home">
    <Nav />
    <BDD />

  </div>
</template>

<script>
// @ is an alias to /src


import Nav from "../components/Nav.vue";
import BDD from "@/components/BDD.vue";



export default {
  name: "Home",
  components: {
    BDD,
    Nav
  }}
</script>

<style lang="scss">
 body{
   margin: 0px;
   padding: 0px;
   background-color: white;
 }
 
</style>