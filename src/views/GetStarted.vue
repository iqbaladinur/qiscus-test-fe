<template>
  <div class="h-full bg-white flex items-center">
    <form class="p-16" v-on:submit.prevent @click="login()">
      <label for="userID">
        User ID
      </label>
      <input type="text" class="startedForm focus:border-white" name="userID" v-model="userID">
      <label for="userName">
        Username
      </label>
      <input type="text" class="startedForm focus:border-white" name="userName" v-model="userName">
      <label for="userKey">
        User Key
      </label>
      <input type="password" class="startedForm focus:border-white" name="userKey" v-model="userKey">
      <button class="rounded bg-blue-400 px-4 py-2 mt-5">
        Get Started
      </button>
    </form>
  </div>
</template>

<script>
import { Emmiter } from './../services/emmiter';
export default {
  name: 'GetStarted',
  data() {
    return {
      userID: 'guest-101',
      userName: 'guest-101',
      userKey: 'passkey'
    }
  },
  beforeCreate() {
    console.log();
  },
  methods: {
    login() {
      const ctx = this;
      console.log(ctx.qiscus.isLogin)
      if (ctx.userID && ctx.userName && ctx.userKey) {  
        ctx.qiscus.setUser(ctx.userID.trim(), ctx.userKey.trim(), ctx.userName.trim())
          .then(function (authData) {
            ctx.$store.dispatch('setLogin', true);
            ctx.$router.push('/dashboard')
          })
          .catch(function (error) {
              console.error(error);
          })  
      } else {
        alert('required field empty');
      }
    },
  }
}
</script>
<style lang="postcss" scoped>
.startedForm {
  @apply p-2 w-full my-2 rounded bg-transparent border-b-2 border-green-200;
}
</style>
