<template>
  <nav class="flex justify-between items-center bg-indigo-500 text-white rounded-t-lg h-16" role="navigation">
    <div class="w-1/4 flex justify-center items-center">
      <a href="#">
        <img :src="userData.avatar_url" class="h-10 w-10 rounded-full object-cover">
      </a>
    </div>
    <div class="w-2/4 flex justify-center items-center">
      {{ pageName }}
    </div>
    <div class="w-1/4 flex justify-center items-center">
      aha
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'TopNavbar',
  computed: {
    ...mapState(['userData', 'pageName'])
  }
}
</script>

<style>

</style>