<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/users">Mon profile</router-link>
    <router-view />
  </div>
</template>



<script>
export default{
 name: "Nav",
}
</script>
