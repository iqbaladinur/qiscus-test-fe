<template>
  <div class="h-full">
    <top-navbar :is-main-frame="false"/>
    <ul class="list-container overflow-y-auto h-custom">

    </ul>
  </div>
</template>

<script>
import TopNavbar from '@/components/TopNavbar.vue';

export default {
  name: 'NewChat',
  components: {
    TopNavbar
  },
  mounted() {
    
  }
}
</script>

<style>

</style>