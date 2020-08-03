<template>
  <div class="post-list">
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
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from "nuxt-property-decorator";
  import PostPreview from "~/components/Posts/PostPreview.vue";


  @Component({
    components:{
      PostPreview:PostPreview
    }
  })
  export default class PostList extends Vue {


  }
</script>

<style lang="">

</style>
