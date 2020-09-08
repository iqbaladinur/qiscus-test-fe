<template>
  <div class="h-full">
    <top-navbar :is-main-frame="false"/>
    <div class="list-container overflow-y-auto h-custom">
      <list-chat
        :listMessage="listComment"
      />
    </div>
  </div>
</template>

<script>
import TopNavbar from '@/components/TopNavbar.vue';
import ListChat from '@/components/ListChat.vue';
export default {
  name: 'ChatRoom',
  components: {
    TopNavbar,
    ListChat
  },
  data() {
    return {
      listComment: []
    }
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
          ctx.listComment = room.comments
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