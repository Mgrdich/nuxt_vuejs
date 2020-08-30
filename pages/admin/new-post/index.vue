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
    },
    layout:'admin'
  })
  export default class NewPost extends Vue {


  }
</script>
