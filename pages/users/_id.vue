<template>
  <h1> single user , with ID: {{$route.params.id}}</h1>
</template>

<script lang="ts">
  import {Vue, Component} from "vue-property-decorator";
  import {VueRoute} from "~/interfaces";

  @Component
  export default class UserId extends Vue implements VueRoute {


  }
</script>

<style lang="">

</style>
