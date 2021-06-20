<template>
  <div
    class="gif"
    :style="{ backgroundImage: `url(${gif.images.original.url})` }"
  >
  
    <button v-on:click="copyUrl">ajouter</button>
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue';
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
      const internalInstance = getCurrentInstance(); 
      const emitter = internalInstance.appContext.config.globalProperties.emitter;
      emitter.emit("gifUrl",this.gif.images.original.url)
      console.log(this.gif.images.original.url);
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

