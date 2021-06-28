<template>
<div >
  <Nav/>
  <article>
    <div>
      <label for="text"></label>
      <textarea
        v-model="text"
        type="text"
        name="text"
        placeholder="  ecrivez quelque chose..">
      </textarea>
    </div>
    <div class="btn">
    <button v-if="!gifBtn" v-on:click="imageBtn = !imageBtn">image</button>
    <button v-if="!imageBtn" v-on:click="gifBtn = !gifBtn">Gif</button>
    </div>
   <form v-show="imageBtn" enctype="multipart/form-data" action="/images">
        <label for="file"></label>
        <input type="file" v-on:change="selectFile" ref="image" name="multimedia" />
    </form>

    <Search v-show="gifBtn" @fetch-gifs="onFetch" />
    <Gif-list :gifs="gifs" @giveUrl="gotUrl" />

    <input  class="submit" type="submit" v-on:click="post" value="Poster" />
  </article>
  </div>
</template>

<style lang="scss" scoped>
article{
  text-align: center;
  margin-top:80%;
}
textarea,form {
margin-bottom:10%;
}
.btn{
  display: flex;
  justify-content: space-around;
      button{
     box-shadow: 0px 5px 9px rgba(0, 0, 0, 0.27);
     width: 80px;
     border: none;
  background-color: salmon;
  margin-bottom:30px ;
  padding: 2%;
  border-radius: 5%;
   }
}
.submit{
  background-color: green;
  font-weight: bold;
  color: white;
  border: none;
  padding: 3%;
  width: 120px;
   border-radius: 5%;
   box-shadow: 0px 5px 9px rgba(0, 0, 0, 0.27);
}
</style>

<script>
import axios from "axios";
import Search from "../components/Search.vue";
import GifList from "../components/GifList.vue";
import Nav from "../components/Nav.vue";

export default {
  components: {Search, GifList,Nav},
  name: "Post",
  data() {
    return {
      text: "",
      image:"",
      gifs: [],
      Users_id:"",
      gif:"",
      imageBtn: false,
      gifBtn: false
    };
  },

  methods: {
    gotUrl:function(value){
      this.gif=value
    },
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
      formData.append('text', this.text);
      formData.append('Users_id',JSON.parse(localStorage.getItem("userId")));
      formData.append('gif',this.gif)
      const data = {
        text: this.text,
       image:this.file,
       gif:this.gif,
       Users_id: JSON.parse(localStorage.getItem("userId"))
      };
      

      try {
        await axios
          .post("http://localhost:4201/api/contents",formData,{data,
    headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: "Bearer " + localStorage.getItem("token"),
    }})
          .then((res) => {
            console.log(res);
            this.$router.push("/");
          })
          .catch((err) => {
            console.log(err);console.log(data);
          });
     
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>