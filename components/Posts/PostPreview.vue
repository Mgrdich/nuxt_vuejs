<template>
  <nuxt-link :to="postLink" class="post-preview">
    <article>
      <div class="post-thumbnail" :style="{backgroundImage: 'url('+bgUrl+')'}"></div>
      <div class="post-content">
        <h1>{{title}}</h1>
        <p>{{previewText}}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script lang="ts">
  import {Vue, Component, Prop} from "nuxt-property-decorator";

  @Component
  export default class PostPreview extends Vue {
    @Prop({required: true}) id!: string;
    @Prop({required: true}) bgUrl!: string;
    @Prop({required: true}) title!: string;
    @Prop({required:true}) isAdmin!:boolean;
    @Prop() previewText!: string;

    get postLink(): string {
      let prefix: string = '/posts/';
      if (this.isAdmin) {
        prefix = '/admin/';
      }
      return prefix + this.id;
    }
  }
</script>

<style scoped>
  .post-preview {
    border: 1px solid #ccc;
    box-shadow: 0 2px 2px #ccc;
    background-color: white;
    width: 90%;
  }

  a {
    text-decoration: none;
    color: black;
  }

  @media (min-width: 850px) {
    .post-preview {
      width: 400px;
      margin: 10px;
    }
  }

  .post-thumbnail {
    width: 100%;
    height: 200px;
    background-position: center;
    background-size: cover;
  }

  .post-content {
    padding: 10px;
    text-align: center;
  }

  a:hover .post-content,
  a:active .post-content {
    background-color: #ccc;
  }
</style>
