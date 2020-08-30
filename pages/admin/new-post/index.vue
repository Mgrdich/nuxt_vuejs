<template>
  <div class="admin-new-post-page">
      <section class="form-container forms">
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
  .form-container {
    margin: 20px;
  }
</style>
