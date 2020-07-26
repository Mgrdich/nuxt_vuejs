<template>
  <div class="container">
    <div>
      <nuxt-link to="/users">Users</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'nuxt-property-decorator';

  @Component
  export default class Users extends Vue{

  }
</script>

<style>

</style>
