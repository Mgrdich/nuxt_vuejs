<template>
    <div class="admin-auth-page">
      <div class="auth-container forms">
        <form>
          <AppInput type="email">Email Address</AppInput>
          <AppInput type="password">Password</AppInput>
          <AppButton type="submit">{{isLogin?'Login':'Sign Up'}}</AppButton>
          <AppButton
            type="button"
            btn-style="inverted ml10"
            @click="isLogin = !isLogin;"
          >
            Switch to {{isLogin?'Sign Up':'Login'}}
          </AppButton>
        </form>
      </div>
    </div>
</template>

<script lang="ts">
  import {Vue, Component,Prop} from "nuxt-property-decorator";
  import AppInput from "~/components/UI/AppInput.vue";
  import AppButton from "~/components/UI/AppButton.vue";
  @Component({
    components: {AppButton, AppInput},
    layout:'admin'
  })
  export default class Auth extends Vue {
    @Prop({default:false})isLogin!:boolean;
  }
</script>

<style>
  .auth-container {
    margin-top: 100px;
  }
  .ml10 {
    margin-left: 10px;
  }
</style>
