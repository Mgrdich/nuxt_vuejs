<template>
  <div class="post-list">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :bg-url="post.bgUrl"
      :preview-text="post.previewText"
      :title="post.title"
      :is-admin="isAdmin"
    />
  </div>
</template>

<script lang="ts">
  import {Vue, Component, Prop} from "nuxt-property-decorator";
  import PostPreview from "~/components/Posts/PostPreview.vue";
  import {IPost} from "~/interfaces";


  @Component({
    components:{
      PostPreview:PostPreview
    }
  })
  export default class PostList extends Vue {
    @Prop({default: false}) isAdmin!: boolean;
    @Prop({required:true})posts!:Array<IPost>;
  }
</script>
