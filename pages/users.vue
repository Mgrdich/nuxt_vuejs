<template>
  <div>
    <h1>the users view</h1>
    <nuxt-link to="/">Home</nuxt-link>
    <input type="text" v-model="id">
    <button @click="btnClick">
      Click me
    </button>
    <nuxt-child/>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'nuxt-property-decorator';

  @Component
  export default class Users extends Vue {
    public id: string = '';

    private btnClick() {
      this.$router.push(`/users/${this.id}`);
    }
  }

</script>
