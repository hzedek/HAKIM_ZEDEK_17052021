<template>
  <article>
    <div>
      <label for="title"></label>
      <input type="text" v-model="title" />
    </div>
    <div>
      <label for="text"></label>
      <input class="text" v-model="text" type="text" name="text" />
    </div>
    <Search @fetch-gifs="onFetch" />
    <Gif-list :gifs="gifs" @giveUrl="gotUrl" />

    <form enctype="multipart/form-data" action="/images">
      <label for="file"></label>
      <input
        type="file"
        v-on:change="selectFile"
        ref="image"
        name="multimedia"
      />
    </form>
    <input type="submit" v-on:click="modifyPost" value="Modifier" />
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

export default {
  components: { Search, GifList },
  name: "Modify",
  data() {
    return {
      title: "",
      text: "",
      image: "",
      gifs: [],
      gif: "",
    };
  },
  async mounted() {
    const id = this.$route.params.id;
    await axios
      .get(`http://localhost:4201/api/contents/` + id)
      .then((res) => {
        this.text = res.data.text;
        this.title = res.data.title;
      })
      .catch((err) => {
        this.data = console.log(err);
      });
  },

  methods: {
   async modifyPost() {
      const id = this.$route.params.id;
      let formData = new FormData();
      formData.append("image", this.file);
      formData.append("title", this.title);
      formData.append("text", this.text);
      formData.append("gif", this.gif);
      const data = {
        title: this.title,
        text: this.text,
        image: this.file,
        gif: this.gif,
      };
     await axios
        .put(`http://localhost:4201/api/contents/` + id, formData, {
          data,
          headers: {
            "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then(() => {
          this.$router.replace("/");
          console.log("HERE");
        })
        .catch((err) => {
          console.log(err);
          console.log(data);
        });
    },
    gotUrl: function (value) {
      this.gif = value;
    },
    onFetch(result) {
      this.gifs = result;
    },
    selectFile() {
      this.file = this.$refs.image.files[0];
    },
  },
};
</script>