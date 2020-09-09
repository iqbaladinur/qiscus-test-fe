<template>
  <div class="h-full relative">
    <top-navbar :is-main-frame="false"/>
    <div v-if="roomData">
      <div class="relative shadow">
        <img :src="roomData.avatar" class="h-48 w-full object-cover">
        <div class="absolute flex justify-end items-center bottom-0 right-0 w-full h-16 bg-black bg-opacity-25">
          <button class="text-lg py-1 px-2 border-white border-2 rounded mr-3" @click="changeProfile">
            🖼️
          </button>
        </div>
      </div>
      <div class="border-b">
        <p class="text-xs text-gray-600 p-3">
          Information
        </p>
      </div>
      <div class="flex justify-between text-xs items-center">
        <form v-if="changeForm" @submit="updateGroupName" v-on:submit.prevent class="w-full p-1">
          <input type="text" class="w-full p-2 bg-gray-200 rounded" v-model="roomName">
        </form>
        <p v-else class="p-3">
          😲 {{ roomData.name }}
        </p>
        <button v-if="roomData.room_type !== 'single'"  @click="changeForm = !changeForm" class="text-lg py-1 px-2 border-white border-2 rounded mr-3">
          📝
        </button>
      </div>
      <div class="border-b border-t" v-if="roomData.room_type !== 'single'">
        <p class="text-xs text-gray-600 p-3">
          Participants
        </p>
      </div>
      <div
        v-for="(user, idx) in roomData.participants"
        :key="idx"
        class="flex justify-between text-xs items-center"
        :class="{ 'hidden': user.email == userData.email }"
      >
        <p
          class="p-3"
        >
          😲 {{ user.email }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import TopNavbar from '@/components/TopNavbar.vue';
import { mapState } from 'vuex'

export default {
  name: 'ProfileRoom',
  components: {
    TopNavbar
  },
  computed: {
    ...mapState(['userData']),
  },
  data() {
    return {
      roomData: null,
      roomName: null,
      changeForm: false
    }
  },
  mounted() {
    this.loadRoom()
  },
  methods: {
    loadRoom() {
      const ctx = this
      ctx.qiscus.getRoomById(ctx.$route.query.roomInfo)
        .then(room => {
          ctx.roomData = room
          ctx.roomName = room.name
        })
        .catch(error => {
          console.error(error)
        })
    },
    updateGroupName() {
      const ctx = this
      ctx.qiscus.updateRoom({
          id: ctx.$route.query.roomInfo,
          room_name: ctx.roomName,
      }).then(function (room) {
          ctx.loadRoom()
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