<template>
<header>
    <img src="../assets/groupomania.png" alt="icon groupomania">
   <nav>
     <router-link to="/login"> Connexion </router-link>
    <router-link to="/signup">S'inscrire</router-link>
    <router-view />
  </nav>
  </header>
</template>



<script>
export default{
 name: "Nav",
}
</script>

<style lang="scss" scoped>
header{
  position: relative;
  margin-bottom: 80px;
}
img{
    display: flex;
    height: 8em;
  width: 8em;
  position: absolute;
  top: -40px;
  left: -15px;
  }
nav {
  position:absolute;
  right: -10px;
  top: 12px;
  a {
    font-weight: bold;
    text-decoration:none ;
    &.router-link-exact-active {
      color: rgb(226, 114, 102);
      font-weight: 900;
    }
  }
}
</style>


