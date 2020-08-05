<template>
  <div class="admin-new-post-page">
    <section class="update-form forms">
      <AdminPostForm :post="loadedPost"/>
    </section>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from "nuxt-property-decorator";
  import AdminPostForm from "~/components/Admin/AdminPostForm.vue";
  import {IPost} from "~/interfaces";

  @Component({
    components: {AdminPostForm}
  })
  export default class PostID extends Vue {
    private loadedPost:IPost = {
      id:'',
      bgUrl:'',
      previewText:'',
      title:'Damn you fool',
      author:'sss'
    }
  }
</script>
