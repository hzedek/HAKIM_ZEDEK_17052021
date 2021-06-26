<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/users">Mon profile</router-link>
    <router-view />
  </div>
</template>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0px;
  padding: 0px;
  
}

#nav {
  padding: 30px;
  background-color: white;
  box-shadow: 7px 10px 9px -6px rgba(172, 172, 172, 0.514);
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: orange;
      font-weight: 900;
    }
  }
}
</style>
