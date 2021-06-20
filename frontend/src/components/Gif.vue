<template>
  <div
    class="gif"
    :style="{ backgroundImage: `url(${gif.images.original.url})` }"
  >
  
    <button  v-on:click="copyUrl">ajouter</button>
  </div>
</template>

<script>
export default {
  name: "Gif",
  data(){
    return{     
      gifs:[],
    }},
  props: {
    gif: Object,
  },
  methods: {
    copyUrl() {
      this.$emit("gifUrl",this.gif.images.original.url)
    },
  },
};
</script>

<style scoped lang="scss">
.gif {
  width: 240px;
  height: 240px;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

