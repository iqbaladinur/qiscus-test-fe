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
  name: 'ChatRoom',
  components: {
    TopNavbar,
  },
  created(){
    this.$store.dispatch('setPageName', this.$route.query.title)
  },
  mounted() {
    this.loadRoom()
  },
  methods: {
    loadRoom() {
      const ctx = this
      ctx.qiscus.getRoomById(ctx.$route.query.roomId)
        .then(room => {
          console.info(room)
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>

<style>

</style>