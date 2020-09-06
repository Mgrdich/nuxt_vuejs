<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <PostList :posts="posts"/>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'nuxt-property-decorator';
  import PostList from "~/components/Posts/PostList.vue";
  import {IPost} from "~/interfaces";
  import {POSTS_TEST} from "~/functions/util";
  import {Context} from "@nuxt/types";

  @Component({
    components:{
      PostList
    }
  })
  export default class Index extends Vue{
    private posts:Array<IPost> = [];

    asyncData (context:Context,callback:Function) { //wait for async data to be fetched on the Server
      setTimeout( () => {
        callback(null,{
            posts:POSTS_TEST
          }
        );
      },1500);
    }
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
    box-shadow: 3px 3px 3px #000000;
    box-sizing: border-box;
    border: 1px solid black;
  }

  @media (min-width: 768px) {
    .intro h1 {
      font-size: 2rem;
    }
  }
</style>
