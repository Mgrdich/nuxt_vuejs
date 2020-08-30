<template>
    <div class="admin-auth-page">
      <div class="auth-container">
        <form>
          <AppControlInput v-model="auth.email">Email</AppControlInput>
          <AppControlInput v-model="auth.password">Password</AppControlInput>
          <AppButton type="submit">{{isLogin?'Login':'Sign Up'}}</AppButton>
        </form>
      </div>
    </div>
</template>

<script lang="ts">
  import {Vue, Component} from "nuxt-property-decorator";
  import AppInputControl from "~/components/UI/AppInput.vue";
  import AppButton from "~/components/UI/AppButton.vue";
  import {IAuth} from "~/interfaces";

  @Component({
    components:{
      AppControlInput: AppInputControl,
      AppButton: AppButton
    }
  })
  export default class Auth extends Vue {
   private auth:IAuth  = {
     email:'',
     password:''
   }
   private isLogin:boolean = false;

  }
</script>
