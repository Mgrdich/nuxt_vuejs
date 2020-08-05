<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
    <AppControlInput v-model="editedPost.title">Title</AppControlInput>
    <AppControlInput v-model="editedPost.thumbnailLink">Thumbnail Link</AppControlInput>
    <AppControlInput
      control-type="textarea"
      v-model="editedPost.content">Content
    </AppControlInput>
    <AppButton type="submit">Save</AppButton>
    <AppButton
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel">Cancel
    </AppButton>
  </form>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "nuxt-property-decorator";
  import AppControlInput from "~/components/UI/AppInput.vue";
  import AppButton from "~/components/UI/AppButton.vue";

  @Component({
    component: {
      AppControlInput,
      AppButton
    }
  })
  export default class AdminPostForm extends Vue {
    @Prop({required: false}) post!: Object;
    public editedPost: any = this.post
      ? {...this.post}
      : {
        author: "",
        title: "",
        thumbnailLink: "",
        content: ""
      };

    private onSave(): void {
      console.log(this.editedPost);
    }

    private onCancel(): void {
      // Navigate back
      this.$router.push("/admin");
    }

  }
</script>
