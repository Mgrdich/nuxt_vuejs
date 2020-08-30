<template>
  <div class="post-list">
    <PostPreview
      id="1"
      bg-url="https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
      preview-text=""
      title="Test1"
      :is-admin="isAdmin"
    />
    <PostPreview
      id="2"
      bg-url="https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
      title="Test1"
      :is-admin="isAdmin"
    />
  </div>
</template>

<script lang="ts">
  import {Vue, Component, Prop} from "nuxt-property-decorator";
  import PostPreview from "~/components/Posts/PostPreview.vue";


  @Component({
    components:{
      PostPreview:PostPreview
    }
  })
  export default class PostList extends Vue {
    @Prop({default: false}) isAdmin!: boolean;
  }
</script>
