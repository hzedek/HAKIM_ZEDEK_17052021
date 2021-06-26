<template>
  <article>
    <div class="contents" v-bind:key="content.id+ index" v-for="(content, index) in contents">
      <p class="pseudo">{{ content.User.pseudo }}</p>
      <!--  <fa icon="robot"/> -->
      <!-- <p>{{ content.createdAt }}</p> -->
      <p class="content black">{{ content.text }}</p>
      <div v-if="content.multimedia">
        <img :src="`${content.multimedia}`" />
      </div>
      <div v-if="content.gif">
        <img :src="`${content.gif}`" />
      </div>
      <p>Commentaire</p>
      <div class="commentaires" v-bind:key="commentaire.id+ index" v-for="(commentaire, index) in comment">
        <p class="pseudo">{{ content.User.pseudo }}</p>
        <p class="commentaire">{{commentaire.comments}}</p>
        </div>
      <input type="text" v-model="comments" placeholder="commenter" />
      <button type="button" v-on:click="commentPost(content.id)">
        Envoyer
      </button>
      <button type="button" v-on:click="() => deletePost(content.id)">
        Supprimer
      </button>
      <router-link :to="{ name: 'modify', params: { id: `${content.id}` } }"
        ><button type="button">Modifier</button></router-link
      >
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
      User: [],
      comments: "",
      comment:[]
    };
  },
  async mounted() {
    await axios.get("http://localhost:4201/api/contents")
      .then((res) => {
        this.contents = res.data;
        console.log(res.data);
      })
      .catch((err) => {
        this.data = console.log(err);
      });
    await axios.get("http://localhost:4201/api/users", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => (this.User = response));
    await axios.get("http://localhost:4201/api/Comments")
    .then((res) => {
            this.comment=res.data
            console.log(res.data);
          })
    ;
  },
  methods: {
    async commentPost(id) {
      const data = {
        comments: this.comments,
        Users_id: JSON.parse(localStorage.getItem("userId")),
        Contents_id: id,
      };
      try {
        console.log(data);
        await axios.post("http://localhost:4201/api/Comments", data)
          .then((res) => {
            console.log(res);
            location.reload();
          })
          .catch((err) => {
            console.log(err);
            console.log(data);
          });
      } catch (err) {
        console.log(err);
      }
    },
    deletePost(id) {
      axios.delete(`http://localhost:4201/api/contents/${id}`)
        .then(() => {
          console.log("SUCCESS");
          location.reload();
        })
        .catch((err) => {
          console.log(err);
          console.log("11111>>>>>>>");
        });
    },
  },
};
</script>

 <style scoped lang="scss">
.contents {
  border: 2px solid transparent;
  background-color: rgb(218, 147, 147);
  margin-top: 1.2em;
  border-radius: 10px;
  box-shadow: 0px 5px 9px rgba(0, 0, 0, 0.527);
  :first-child {
    color: black;
    font-weight: bold;    
  }
  .pseudo{
    display: flex;
    justify-self: left;
    margin-left: 20px;
  }
   .commentaires{
      
      border:2px solid transparent; 
  .commentaire{
    display: flex;
    justify-self: left;
    margin-left: 20px;
    line-height: 1px;
    }
  }
  .black {
    color: black;
    font-size: 1.2em;
  }
  input {
    border: none;
    // background-color: rgb(189, 189, 189);
    font-weight: bold;
    font-size: 1.1em;
  }
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content{
   align-items: center;
 }
</style>