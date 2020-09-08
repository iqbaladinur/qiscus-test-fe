<template>
  <div class="h-full">
    <top-navbar />
    <ul v-if="roomList.length > 0" class="list-container overflow-y-auto h-custom">
      <room
        v-for="(room, index) in roomList"
        :key="index"
        :room-id="room.id"
        :room-title="room.name"
        :room-avatar="room.avatar"
        :last-message="room.last_comment_message"
        :last-date="room.last_comment_message_created_at"
        :notif="room.count_notif"
      />
      <li v-if="roomList.length >= perPage " class="text-center my-2">
        <button class="text-xs rounded bg-blue-400 py-2 px-4" @click="nextPage">
          {{ loadMoreText }}
        </button>
      </li>
    </ul>
    <div v-else class="flex h-custom items-center justify-center">
      <div v-if="!isLoading">
        <p class="text-center py-2">
          No Chats
        </p>
        <a href="#" class="px-4 py-2 rounded bg-blue-400 w-full">
          Start Chat
        </a>
      </div>
      <div v-else>
        loading..
      </div>
    </div>
  </div>
</template>
<script>
import TopNavbar from '@/components/TopNavbar.vue'
import Room from '@/components/Room'
import Emitter from '@/services/emmiter'
import debounce from 'lodash.debounce'

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
      roomList: [],
      loadMoreText: 'Load more',
      isLoading: true,
      isLoadMore: false
    }
  },
  mounted(){
    const ctx = this
    ctx.isLoading = true
    setTimeout(() => {
      ctx.loadRooms()
      ctx.isLoading = false
    }, 1000 * 1.5)
    Emitter.$on('qiscus::new-message', (payload) => {
      ctx.loadRooms()
      ctx.getUnreadCountMessage()
    });
  },
  beforeDestroy() {
    Emitter.$off('qiscus::new-message')
  },
  methods: {
    loadRooms: debounce(function() {
      const ctx = this
      ctx.loadMoreText = 'Loading..'
      ctx.qiscus.loadRoomList({
        page: ctx.page,
        limit: ctx.perPage,
        show_empty : false
      })
        .then(room => {
          ctx.loadMoreText = 'Load more'
          if (ctx.isLoadMore) {
            ctx.roomList = [...ctx.roomList, ...room]
          } else {
            ctx.roomList = room
          }
          ctx.isLoadMore = false
        })
        .catch(err => {
          ctx.loadMoreText = 'Failed, try again'
          console.error(err)
        })
    }, 1000),
    nextPage() {
      ctx.isLoadMore = true
      this.page += 1
      this.loadRooms()
    },
    getUnreadCountMessage() {
      const ctx = this
      ctx.qiscus.getTotalUnreadCount()
        .then(function (unreadCount) {
            console.info(unreadCount)
        })
        .catch(function (error) {
            console.error(error)
        })
    }
  }
}
</script>
