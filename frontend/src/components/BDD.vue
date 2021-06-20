<template>
  <article>
    <div class="contents" v-bind:key="content.id" v-for="content in contents">
      <p class="content">{{ User.pseudo}}</p>
      <p>{{ content.createdAt }}</p>
      <p class="content black">{{ content.title }}</p>
      <img v-bind:key="content.multimedia" v-if="`${content.multimedia}`!== undefined"
        class="content"
        :src="`${content.multimedia}`"
      />
      <img
        class="content"
        :src="`${content.gif}`"
      />
      <p class="content">{{ content.text }}</p>
      <input type="button" value="Commenter" />
      <button type="button" v-on:click="deletePost(content.id)">Supprimer</button>
    </div>
  </article>
</template>

<script>
import axios from "axios";

export default {
  name: "BDD",
  data() {
    return {
      contents: [],
      User:[],
    };
  },
  async mounted() {
    await axios
      .get("http://localhost:4201/api/contents")
      .then((res) => {
        this.contents = res.data;
      })
      .catch((err) => {
        this.data = console.log(err);
      });
      axios.get("http://localhost:4201/api/users",{
        headers:{
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      .then(response=> this.User = response)
  },
  methods: {
  deletePost(id) {
    axios.delete(`http://localhost:4201/api/contents/`+ id,{
      headers:{
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }},{
        data:{id:"id"}
    })
    .then((res) => {
            console.log(res);
          this.$router.push("/");
          })
          .catch((err) => {
            console.log(err);
          });}}
};
</script>

 <style scoped lang="scss">
.contents {
  border: 2px solid transparent;
  background-color: rgb(189, 189, 189);
  margin-top: 1.2em;
  border-radius: 10px;
  box-shadow: 0px 5px 9px rgba(0, 0, 0, 0.527);

  :first-child {
    color: black;
    font-weight: bold;
  }
  .black {
    color: black;
    font-size: 1.2em;
  }
  .content {
    margin-left: 20px;
    display: flex;
  }
  input {
    border: none;
    background-color: rgb(189, 189, 189);
    font-weight: bold;
    font-size: 1.1em;
    color: white;
  }
}
img {
  max-width: 40%;
  max-height: 40%;
  object-fit: cover;
}
</style>