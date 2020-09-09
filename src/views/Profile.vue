<template>
  <div class="h-full relative">
    <top-navbar :is-main-frame="false"/>
    <div class="relative shadow">
      <img :src="userData.avatar_url" class="h-48 w-full object-cover">
      <div class="absolute flex justify-end items-center bottom-0 right-0 w-full h-16 bg-black bg-opacity-25">
        <button class="text-lg py-1 px-2 border-white border-2 rounded mr-3" @click="changeProfile">
          🖼️
        </button>
      </div>
    </div>
    <div class="flex justify-between text-xs items-center shadow">
      <form v-if="changeForm" @submit="updateName" v-on:submit.prevent class="w-full p-1">
        <input type="text" class="w-full p-2 bg-gray-200 rounded" v-model="username">
      </form>
      <p v-else class="p-3">
        😲 {{ userData.username }}
      </p>
      <button @click="changeForm = !changeForm" class="text-lg py-1 px-2 border-white border-2 rounded mr-3">
        📝
      </button>
    </div>
    <div class="flex justify-between text-xs items-center shadow">
      <p class="p-3">
        😲 {{ userData.email }}
      </p>
    </div>
    <div class="absolute bottom-0 left-0 w-full text-xs flex justify-between items-center shadow">
      <button class="py-3 px-2 w-full" @click="logout">
        ❌ Logout
      </button>
    </div>
  </div>
</template>

<script>
import TopNavbar from '@/components/TopNavbar.vue';
import { mapState } from 'vuex'

export default {
  name: 'Profile',
  components: {
    TopNavbar
  },
  computed: {
    ...mapState(['userData'])
  },
  data() {
    return {
      changeForm: false,
      username: this.$store.state.userData.username
    }
  },
  methods: {
    updateName() {
      const ctx = this
      ctx.qiscus.updateProfile({
          name: ctx.username 
      }).then(function (user) {
          localStorage.setItem('authData', JSON.stringify(user))
          ctx.$store.dispatch('setUserData', user)
          ctx.changeForm = false
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    changeProfile() {
      alert('not implemented yet')
    },
    logout() {
      const ctx = this
      ctx.qiscus.logout()
      localStorage.clear()
      ctx.$store.dispatch('setLogin', false)
      ctx.$store.dispatch('setUserData', null)
      ctx.$router.push('/')
    }
  }
}
</script>

<style>

</style>