<template>
  <article>
    <div
      class="contents"
      v-bind:key="content.id + index"
      v-for="(content, index) in contents"
    >
      <p class="pseudo">{{ content.User.pseudo }}</p>
      <!--  <fa icon="paper-plane"/> -->
      <!-- <p>{{ content.createdAt }}</p> -->
      <p class="content black">{{ content.text }}</p>
      <div v-if="content.multimedia">
        <img :src="`${content.multimedia}`" />
      </div>
      <div v-if="content.gif">
        <img :src="`${content.gif}`" />
      </div>
<!-- --------Commentaire------- -->
      <p id="commentaireLine">Commentaire</p>
      <div
        class="commentaires"
        v-bind:key="commentaire.id + index"
        v-for="(commentaire, index) in comments"
      >
        <div v-if="content.id == commentaire.Contents_id">
          <p class="pseudo">{{ commentaire.User.pseudo }}</p>
          <div class="deleteIcon">
          <p class="commentaire">{{ commentaire.comments }}</p>
          <button class="deleteicon"
            v-if="commentaire.Users_id == userid"
            v-on:click="deleteCom(commentaire.id)"
          >
            <fa class="red" icon="times-circle" />
          </button>
          </div>
        </div>
      </div>
      <div class="textComment">
      <textarea
        class="commentField"
        v-model="comment"
        placeholder="Laissez un commentaire ..."
        
      ></textarea>
      <button  class="buttonPlane" type="button" v-on:click="commentPost(content.id)">
        <fa icon="paper-plane" />
      </button>
      </div>


      <button
        type="button"
        v-if="content.Users_id == userid"
        v-on:click="deletePost(content.id)"
      >
        Supprimer
      </button>
      <router-link :to="{ name: 'modify', params: { id: `${content.id}` } }"
        ><button v-if="content.Users_id == userid" type="button">
          Modifier
        </button></router-link
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
      comment: "",
      comments: [],
      userid: localStorage.getItem("userId"),
    };
  },
  async mounted() {
    await axios
      .get("http://localhost:4201/api/contents")
      .then((res) => {
        this.contents = res.data;
        console.log(res.data);
      })
      .catch((err) => {
        this.data = console.log(err);
      });

    await axios
      .get("http://localhost:4201/api/users", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => (this.User = response))
      .catch((err) => {
        this.data = console.log(err);
      });
    await axios
      .get("http://localhost:4201/api/Comments")
      .then((res) => {
        this.comments = res.data;
        console.log(res.data);
      })
      .catch((err) => {
        this.data = console.log(err);
      });
  },
  methods: {
    //CREER UN COMMENTAIRE
    async commentPost(id) {
      const data = {
        comments: this.comment,
        Users_id: JSON.parse(localStorage.getItem("userId")),
        Contents_id: id,
      };
      try {
        console.log(data);
        await axios
          .post("http://localhost:4201/api/Comments", data, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          })
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
    //SUPPRIMER UN POST
    deletePost(id) {
      axios
        .delete(`http://localhost:4201/api/contents/${id}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then(() => {
          console.log("SUCCESS");
          location.reload();
        })
        .catch((err) => {
          console.log(err);
          console.log("11111>>>>>>>");
        });
    },
    //SUPPRIMER UN Commentaire
    deleteCom(id) {
      axios
        .delete(`http://localhost:4201/api/Comments/${id}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then(() => {
          console.log("SUCCESS");
          location.reload();
        })
        .catch((err) => {
          console.log(err);
          console.log("nooo>>>>>>>");
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
  .content{
    text-align: center;
  }
  .pseudo {
    display: flex;
    margin-left: 20px;
  }
  //-----Commentaires-------
  #commentaireLine {
    border-top: 1px solid rgb(233, 218, 218);
    padding-top: 20px;
    text-align: center;
  }
  .commentaires {
    border: 2px solid transparent;
  
    .commentaire {
      display: flex;
    text-align: left;
      margin-left: 20px;
      margin-top:0px;
      line-height: 0px;      
    }
    .deleteIcon{
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    .deleteicon{
      border: transparent;
      background-color: transparent;
      font-size: 1.1em;
      :hover{
        color:red;
      }
    }
    }
  }
  .textComment{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  .commentField {
    width: 80%;
  }
  .buttonPlane {
      background-color: transparent;
      border: transparent;
      font-size: 1.2em;
      padding-left: 10px;
      :hover{
        color: white;
      }
    }
}
  .black {
    color: black;
    font-size: 1.2em;
  }
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content {
  align-items: center;
}
</style>