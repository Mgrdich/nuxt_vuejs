<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <section class="featured-posts">
      <PostPreview
        id="1"
        bg-url="https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
        preview-text=""
        title="Test1"
      />
      <PostPreview
        id="2"
        bg-url="https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
        title="Test1"
      />
    </section>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'nuxt-property-decorator';
  import PostPreview from "@/components/Posts/PostPreview.vue";

  @Component({
    components:{
      PostPreview:PostPreview
    }
  })
  export default class Index extends Vue{


  }
</script>

<style scoped>
  .intro {
    height: 300px;
    position: relative;
    padding: 30px;
    box-sizing: border-box;
    background-position: center;
    background-size: cover;
    background-image: url("~assets/images/main-page-background.jpg");
  }

  .intro h1 {
    position: absolute;
    top: 10%;
    left: 5%;
    width: 90%;
    font-size: 1.5rem;
    color: black;
    background-color: rgb(211, 211, 211);
    padding: 10px;
    border-radius: 10px;
    box-shadow: 3px 3px 3px black;
    box-sizing: border-box;
    border: 1px solid black;
  }

  @media (min-width: 768px) {
    .intro h1 {
      font-size: 2rem;
    }
  }

  .featured-posts {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }


</style>
