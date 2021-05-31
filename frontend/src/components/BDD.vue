<template>
  <div></div>
</template>

<script>
import axios from "axios";

export default {
  name: "BDD",
  data() {
    return {
      post:[],
    };
  },
  mounted() {
    axios
      .get("http://localhost:4201/api/contents")
      .then((res) => {
        this.post = res.data;
        console.log("heeeeere");
      })
      .catch((err) => {
        this.post = console.log(err);
      });
  },
};
</script>

 <style scoped lang="scss">
</style>