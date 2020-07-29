<template>
  <div>
    <Header @sidenavToggle="displaySideNav = !displaySideNav "/>
    <SideNav
      :show="displaySideNav"
      @close="displaySideNav=false"
    />
    <Nuxt/>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "nuxt-property-decorator";
  import Header from "~/components/Navigation/Header";
  import SideNav from "~/components/Navigation/Sidenav";

  @Component({
    components: {
      Header,
      SideNav
    }
  })
  export default class Default extends Vue {
    private displaySideNav: boolean = false;
  }
</script>

<style>
</style>
