<template>
  <div>
    <h1> single user , with ID: {{$route.params.id}}</h1>
    <button @click="goHome">Go Home</button>
  </div>
</template>

<script lang="ts">
  /*
  import {Vue, Component} from "vue-property-decorator";
  import {VueRoute} from "~/interfaces";

  @Component
  export default class UserId extends Vue implements VueRoute {

    private goHome():void {
      this.$router.push('/');
    }

    validate(ob:any):boolean {
      console.log("sss",ob);
      return false;
    }
  }*/
  import {Route} from 'vue-router';
  import {isInteger} from "~/functions/util";

  export default {
    name:'UserId',
    validate({route}: {route: Route }): Promise<boolean> | boolean {
      return isInteger(route.params.id);
    },
    methods:{
      goHome():void {
        //@ts-ignore //TODO why the class not implementing validate Function
        this.$router.push('/');
      }
    }
  }

</script>

<style lang="">

</style>
