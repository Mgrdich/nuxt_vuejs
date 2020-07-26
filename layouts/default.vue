<template>
  <div>
    <Header/>
    <Nuxt/>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "nuxt-property-decorator";
  import Header from "~/components/Header.vue";

  @Component({
    components: {
      Header: Header
    }
  })
  export default class Default extends Vue {

  }
</script>

<style>
</style>
