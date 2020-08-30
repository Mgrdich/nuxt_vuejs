<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/new-post')">Create Post</AppButton>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <PostList :posts="posts" :is-admin="true" />
    </section>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from "nuxt-property-decorator";
  import PostList from "~/components/Posts/PostList.vue";
  import AppButton from "~/components/UI/AppButton.vue";
  import {IPost} from "~/interfaces";
  import {POSTS_TEST} from "~/functions/util";

  @Component({
    components:{
      PostList,
      AppButton
    },
    layout:'admin'
  })
  export default class Admin extends Vue {
    private posts:Array<IPost> = POSTS_TEST;
  }
</script>

<style>
  .admin-page {
    padding: 20px;
  }

  .new-post {
    text-align: center;
    border-bottom: 2px solid #ccc;
    padding-bottom: 10px;
  }

  .existing-posts h1 {
    text-align: center;
  }
</style>
