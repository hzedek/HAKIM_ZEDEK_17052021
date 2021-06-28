<template>
  <div>
    <Nav />
    <div id="profile">
      <h1>Mon Profile</h1>
      <h2>Bonjour {{ User.pseudo }}</h2>
      <div class="btn">
        <button v-on:click="remove()">Se deconnecter</button>
        <button class="red" v-on:click="deleteUser(User.id)">Supprimer mon compte</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#profile {
  text-align: center;
}
h1 {
  color: rgb(247, 107, 92);
}
.btn {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  button {
    margin-bottom: 30px;
    border: none;
    padding: 5%;
    background-color: green;
    color: white;
    font-weight: bold;
  }
  .red{
      background-color: red;
    }
}
</style>

<script>
import Nav from "../components/Nav.vue";
import axios from "axios";

export default {
  name: "Profile",
  components: {
    Nav,
  },
  data() {
    return {
      User: [],
      userid: localStorage.getItem("userId"),
    };
  },
  methods: {
    deleteUser(id) {
      axios
        .delete(`http://localhost:4201/api/users/${id}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then(() => {
          console.log("SUCCESS");
          this.$router.replace("/signup");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    remove() {
      localStorage.clear();
      this.$router.replace("/login");
    },
  },
  async mounted() {
    await axios
      .get(`http://localhost:4201/api/users/${this.userid}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => (this.User = res.data))
      .catch((err) => {
        this.data = console.log(err);
      });
  },
};
</script>
