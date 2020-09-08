<template>
  <div class="h-full relative">
    <top-navbar :is-main-frame="false"/>
    <div class="list-container overflow-y-auto h-custom" ref="scrollRoomContainer">
      <list-chat
        :listMessage="listComment"
      />
    </div>
    <message-form :roomId="$route.query.roomId" />
  </div>
</template>

<script>
import TopNavbar from '@/components/TopNavbar.vue';
import ListChat from '@/components/ListChat.vue';
import MessageForm from '@/components/MessageForm';


export default {
  name: 'ChatRoom',
  components: {
    TopNavbar,
    ListChat,
    MessageForm
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
          ctx.scrollToBottom()
        })
        .catch(error => {
          console.error(error)
        })
    },
    scrollToBottom() {
      const container = this.$refs.scrollRoomContainer
      container.scrollTop = container.scrollHeight
    }
  }
}
</script>

<style>

</style>