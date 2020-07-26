<template>
  <div>
    <h1> single user , with ID: {{$route.params.id}}</h1>
    <button @click="goHome">Go Home</button>
  </div>
</template>

<script lang="ts">

  import {Vue, Component} from "nuxt-property-decorator";
  import {VueRoute} from "~/interfaces";
  import {Route} from 'vue-router';
  import {isInteger} from "~/functions/util";

  @Component
  export default class UserId extends Vue implements VueRoute {
    private goHome():void {
      this.$router.push('/');
    }

    validate({route}: {route: Route}): Promise<boolean> | boolean {
      return isInteger(route.params.id);
    }
  }

</script>
