<template>
  <div class="about-page">
    <h1> This is page about my project</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor earum est laboriosam nisi quasi sapiente voluptatibus. Consectetur corporis cumque cupiditate ea expedita explicabo fugiat incidunt omnis qui suscipit. Sequi!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor earum est laboriosam nisi quasi sapiente voluptatibus. Consectetur corporis cumque cupiditate ea expedita explicabo fugiat incidunt omnis qui suscipit. Sequi!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor earum est laboriosam nisi quasi sapiente voluptatibus. Consectetur corporis cumque cupiditate ea expedita explicabo fugiat incidunt omnis qui suscipit. Sequi!</p>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from "nuxt-property-decorator";

  @Component
  export default class About extends Vue {
  }
</script>

<style scoped>
  .about-page {
    text-align: center;
    padding: 30px;
  }
</style>
