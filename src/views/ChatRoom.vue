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
import Emitter from '@/services/emmiter'

export default {
  name: 'ChatRoom',
  components: {
    TopNavbar,
    ListChat,
    MessageForm
  },
  data() {
    return {
      listComment: [],
      scrollPosition: 0
    }
  },
  created(){
    this.$store.dispatch('setPageName', this.$route.query.title)
  },
  mounted() {
    this.loadRoom()
    this.scrollToBottom()
    Emitter.$on('qiscus::new-message', (payload) => {
      this.scrollToBottom()
    });
  },
  beforeDestroy() {
    Emitter.$off('qiscus::new-message');
  },
  methods: {
    loadRoom() {
      const ctx = this
      ctx.qiscus.getRoomById(ctx.$route.query.roomId)
        .then(room => {
          ctx.listComment = room.comments
        })
        .catch(error => {
          console.error(error)
        })
    },
    scrollToBottom() {
      setTimeout(() => {
        const container = this.$refs.scrollRoomContainer
        console.log(container.scrollHeight)
        container.scrollTo({
          top: container.scrollHeight,
          behavior: 'smooth'
        })
      }, 1000);
    }
  }
}
</script>

<style>

</style>