<template>
<div id="gifList">
    <Gif v-for="gif in gifs" :key="gif.id" :gif="gif" />
</div>    
</template>

<script>
import Gif from "@/components/Gif";
export default {
    name:"GifList",
    components:{Gif},
    props:{
        gifs: Array
    }
    
}

</script>

<style lang="scss" scoped>
#gifList{
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>