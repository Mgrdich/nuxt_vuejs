<template>
  <div class="posts-page">
    <section class="featured-posts">
      <PostList :posts="posts" :is-admin="false"/>
    </section>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from "nuxt-property-decorator";
  import PostList from "~/components/Posts/PostList.vue";
  import {IPost} from "~/interfaces";
  import {POSTS_TEST} from "~/functions/util";

  @Component({
    components:{
      PostList
    }
  })
  export default class Posts extends Vue {
    private posts:Array<IPost> = POSTS_TEST;
  }
</script>

<style>
  .posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .post-list {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .post {
    width: 100%;
  }

  @media (min-width: 768px) {
    .post {
      width: 600px;
      margin: auto;
    }
  }

  .post-title {
    margin: 0;
  }

  .post-details {
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 3px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    .post-details {
      flex-direction: row;
    }
  }

  .post-detail {
    color: rgb(88, 88, 88);
    margin: 0 10px;
  }

  .post-feedback a {
    color: red;
    text-decoration: none;
  }

  .post-feedback a:hover,
  .post-feedback a:active {
    color: salmon;
  }
</style>
