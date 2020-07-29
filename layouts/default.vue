<template>
  <div>
    <Header @sidenavToggle="displaySideNav = !displaySideNav "/>

    <Nuxt/>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "nuxt-property-decorator";
  import Header from "~/components/Navigation/Header";

  @Component({
    components: {
      Header,

    }
  })
  export default class Default extends Vue {
    private displaySideNav: boolean = false;
  }
</script>

<style>
</style>
