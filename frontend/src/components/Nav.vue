<template>
<header>
    <img src="../assets/groupomania.png" alt="icon groupomania">
   <nav>
     <router-link to="/"> <fa class="icon" icon="home"/> </router-link>
    <router-link to="/users"> <fa class="icon" icon="user"/> </router-link>
    <router-link to="/post"> <fa class="icon" icon="plus"/></router-link> 
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
margin-bottom: 80px;
}
img{
    display: flex;
    height: 8em;
  width: 8em;
  position: absolute;
  top: -40px;
  left: 0px;
  }
nav {
  position:absolute;
  right: 10px;
  top: 12px;
  a {
    font-weight: bold;
    &.router-link-exact-active {
      color: rgb(226, 114, 102);
      font-weight: 900;
    }
  }
  .icon{
    margin-right: 10px;
    font-size: 1.2em;
  }
}
</style>


