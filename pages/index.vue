<template>
  <div class="container">
    <div>
      <nuxt-link to="/users">Users</nuxt-link>
      <input type="text" v-model="id">
      <button @click="btnClick">
        Click me
      </button>
    </div>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';

  @Component
  export default class Users extends Vue{
    public id :string = '';

    private btnClick() {
      this.$router.push(`/users/${this.id}`);
    }
  }
</script>

<style>

</style>
