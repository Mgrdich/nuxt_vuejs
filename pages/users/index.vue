<template>
  <div>
    <h1>the users view</h1>
    <nuxt-link to="/">Users</nuxt-link>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';

  @Component
  export default class Users extends Vue {

  }

</script>

<style scoped lang="scss">

</style>
