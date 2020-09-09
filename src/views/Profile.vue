<template>
  <div class="h-full relative">
    <top-navbar :is-main-frame="false"/>
    <div class="relative shadow">
      <img :src="userData.avatar_url" class="h-48 w-full object-cover">
      <div class="absolute flex justify-end items-center bottom-0 right-0 w-full h-16 bg-black bg-opacity-25">
        <button class="text-lg py-1 px-2 border-white border-2 rounded mr-3">
          🖼️
        </button>
      </div>
    </div>
    <div class="flex justify-between text-xs items-center shadow">
      <p class="p-3">
        😲 {{ userData.username }}
      </p>
      <button class="text-lg py-1 px-2 border-white border-2 rounded mr-3">
        📝
      </button>
    </div>
    <div class="flex justify-between text-xs items-center shadow">
      <p class="p-3">
        😲 {{ userData.email }}
      </p>
    </div>
    <div class="absolute bottom-0 left-0 w-full text-xs flex justify-between items-center shadow">
      <button class="py-3 px-2 w-full">
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
  }
}
</script>

<style>

</style>