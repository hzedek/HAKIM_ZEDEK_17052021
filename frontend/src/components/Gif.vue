<template>
   <button v-on:click.once="copyUrl"><div
    class="gif"
    :style="{ backgroundImage: `url(${gif.images.original.url})` }"
  >
  </div>
    </button>
</template>

<script>
export default {
  name: "Gif",
  data(){
    return{     
      gifs:[],
      ajouté:"ajouté"
    }},
  props: {
    gif: Object,
  },
  methods: {
    copyUrl() {
      this.$emit("gifUrl",this.gif.images.original.url);
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

