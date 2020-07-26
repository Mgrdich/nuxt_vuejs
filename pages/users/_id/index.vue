<template>
  <div>
    <h1> single user , with ID: {{$route.params.id}}</h1>
    <button @click="goHome">Go Home</button>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from "vue-property-decorator";
  import {VueRoute} from "~/interfaces";

  @Component
  export default class UserId extends Vue implements VueRoute {

    private goHome():void {
      this.$router.push('/');
    }
  }
</script>

<style lang="">

</style>
