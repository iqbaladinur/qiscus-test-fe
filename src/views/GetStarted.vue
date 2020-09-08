<template>
  <div class="h-full bg-white flex items-center">
    <form class="p-16 text-sm" v-on:submit.prevent @submit="login()">
      <label class="text-gray-500" for="userID">
        User ID
      </label>
      <input type="text" class="startedForm focus:border-white" name="userID" v-model="userID">
      <label class="text-gray-500" for="userName">
        Username
      </label>
      <input type="text" class="startedForm focus:border-white" name="userName" v-model="userName">
      <label class="text-gray-500" for="userKey">
        User Key
      </label>
      <input type="password" class="startedForm focus:border-white" name="userKey" v-model="userKey">
      <button class="rounded bg-blue-400 px-4 py-2 mt-5">
        {{ loginButtonText }}
      </button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'GetStarted',
  data() {
    return {
      userID: 'guest-101',
      userName: 'guest-101',
      userKey: 'passkey',
      loginButtonText: 'Get Started'
    }
  },
  beforeCreate() {
    this.$store.dispatch('setPageName', 'Chats')
  },
  methods: {
    login() {
      const ctx = this;
      if (ctx.userID && ctx.userName && ctx.userKey) {
        ctx.loginButtonText = 'Sending..'  
        ctx.qiscus.setUser(ctx.userID.trim(), ctx.userKey.trim(), ctx.userName.trim())
          .then(function () {
            const userData = ctx.qiscus.userData
            ctx.loginButtonText = 'Success'
            localStorage.setItem('authData', JSON.stringify(userData))
            ctx.$store.dispatch('setLogin', true)
            ctx.$store.dispatch('setUserData', userData)
            ctx.$router.push('/dashboard')
          })
          .catch(function (error) {
            ctx.loginButtonText = 'Try Again'
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
  @apply p-2 w-full my-2 rounded bg-transparent border-b-2 border-green-200 text-xs;
}
</style>
