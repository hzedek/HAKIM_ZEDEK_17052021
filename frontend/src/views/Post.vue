<template>
  <article>
    <div>
      <label for="title"></label>
      <input type="text" v-model="title" placeholder="  Votre titre" />
    </div>
    <div>
      <label for="text"></label>
      <input
        class="text"
        v-model="text"
        type="text"
        name="text"
        placeholder="  ecrivez quelque chose"
      />
    </div>
    <form enctype="multipart/form-data" action="/images">
        <label for="file"></label>
        <input type="file" v-on:change="selectFile" ref="image" name="multimedia" />
    </form>

    <Search @fetch-gifs="onFetch" />
    <Gif-list :gifs="gifs" />
    



    <input type="submit" v-on:click="post" value="Poster" />
  </article>
</template>

<style lang="scss" scoped>
.text {
  height: 50px;
  width: 200px;
}
</style>

<script>
import axios from "axios";
import Search from "../components/Search.vue";
import GifList from "../components/GifList.vue";
//import Gif from "../components/Gif.vue"

export default {
  components: { Search, GifList},
  name: "Post",
  data() {
    return {
      title: "",
      text: "",
      image:"",
      gifs: [],
    };
  },

  methods: {
   /* getUrl(result){
     this.gifs= result;
   } ,*/
    onFetch(result) {
      this.gifs = result;
    },
    selectFile() {
      this.file = this.$refs.image.files[0];
    },
    async post(e) {
      e.preventDefault();

      let formData = new FormData();
      formData.append('image',this.file);
      const data = {
        title: this.title,
        text: this.text,
        image:this.file,

      };    
      console.log(data);

      try {
        await axios
          .post("http://localhost:4201/api/contents",formData,{data,
    headers: {
        'Content-Type': 'multipart/form-data'
    }})
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
     //   this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>