<template>
  <button
    class="button"
    :class="btnStyle"
    v-bind="$attrs"
    v-on="$listeners"><slot /></button>
</template>

<script lang="ts">
  import {Component, Vue,Prop} from "nuxt-property-decorator";

  @Component
  export default class AppButton extends Vue {
      @Prop({default:''})btnStyle!:string;
  }
</script>


<style scoped>
  .button {
    font: inherit;
    background-color: black;
    color: white;
    cursor: pointer;
    border: 1px solid black;
    padding: 10px;
    border-radius: 4px;
  }

  .button:hover,
  .button:active {
    background-color: rgb(51, 51, 51);
    border: 1px solid black;
  }

  .inverted {
    background-color: white;
    color: black;
    border: 1px solid transparent;
  }

  .inverted:hover,
  .inverted:active {
    color: #ccc;
    background-color: white;
    border: 1px solid transparent;
  }

  .cancel {
    background-color: red;
    color: white;
    border: 1px solid transparent;
  }

  .cancel:hover,
  .cancel:active {
    background-color: salmon;
    border: 1px solid transparent;
    color: white;
  }
</style>
