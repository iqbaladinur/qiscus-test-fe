<template>
  <div class="h-full">
    <top-navbar />
    <ul v-if="roomList.length > 0" class="chatlist-container overflow-y-auto h-custom">
      <room
        v-for="(room, index) in roomList"
        :key="index"
        :room-id="room.id"
        :room-title="room.name"
        :room-avatar="room.avatar"
        :last-message="room.last_comment_message"
        :last-date="room.last_comment_message_created_at"
      />
    </ul>
    <div v-else class="flex h-custom items-center justify-center">
      <div>
        <button>
          createChat
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import TopNavbar from '@/components/TopNavbar.vue';
import Room from '@/components/Room';

export default {
  name: 'DashboardListRoom',
  components: {
    TopNavbar,
    Room
  },
  data() {
    return {
      perPage: 20,
      page: 1,
      roomList: []
    }
  },
  mounted(){
    //this.loadRooms()
  },
  methods: {
    loadRooms(){
      const ctx = this
      ctx.qiscus.loadRoomList({
        page: ctx.page,
        limit: ctx.perPage
      })
        .then(room => {
          ctx.roomList = room
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
}
</script>
<style scoped>
.h-custom{
  height: calc(100vh - 4rem);
}
.chatlist-container{
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.chatlist-container::-webkit-scrollbar {
  display: none;
}
</style>
