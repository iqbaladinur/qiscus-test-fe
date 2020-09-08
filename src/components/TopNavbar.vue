<template>
  <nav class="flex justify-between items-center bg-indigo-500 text-white rounded-t-lg h-16" role="navigation">
    <div class="w-1/4 flex justify-center items-center">
      <a v-if="isMainFrame" href="#">
        <img loading="lazy" :src="userData.avatar_url" class="h-10 w-10 rounded-full object-cover">
      </a>
      <button v-else class="text-white text-xs focus:outline-none" @click="$router.go(-1)">
        Back
      </button>
    </div>
    <div class="w-2/4 flex justify-center items-center">
      {{ pageName }}
    </div>
    <div class="w-1/4 flex justify-center items-center">
      <router-link v-if="isMainFrame" to="/new" tag="a" class="focus:outline-none w-10 h-10 rounded-full p-2">
        💬
      </router-link>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'TopNavbar',
  computed: {
    ...mapState(['userData', 'pageName'])
  },
  props: {
    isMainFrame: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style>

</style>