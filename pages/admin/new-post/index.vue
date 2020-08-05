<template>
  <div class="admin-new-post-page">
      <section class="new-post-form">
        <AdminPostForm/>
      </section>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from "nuxt-property-decorator";
  import AdminPostForm from "~/components/Admin/AdminPostForm.vue";

  @Component({
    components:{
      AdminPostForm
    }
  })
  export default class NewPost extends Vue {


  }
</script>

<style >
  .new-post-form {
    margin: 20px;
  }
</style>
