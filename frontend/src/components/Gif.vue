<template>
  <div
    class="gif"
    :style="{ backgroundImage: `url(${gif.images.original.url})` }"
  >
    <div><button @click="copyUrl, postGif">ajouter</button></div>
  </div>
</template>

<script>
import axios from "axios";
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
      this.$ref.url.select();
      document.execCommand({ commandid: "ajouter" });
    },
    async postGif(e) {
      e.preventDefault();
      const data = {
        gifs: this.gifs,
      };

      await axios
        .post("http://localhost:4201/api/contents", data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
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

