<template>
  <router-link tag="a" :to="`/room?roomId=${roomId}&title=${roomTitle}`">
    <li class="flex relative p-3">
      <div class="w-1/6">
        <img loading="lazy" :src="roomAvatar" class="w-10 h-10 rounded-full object-cover">
      </div>
      <div class="w-5/6 flex items-start justify-between border-b pb-2">
        <div>
          <p class="text-sm">
            {{ roomTitle }}
          </p>
          <p class="text-xs text-gray-400">
            {{ lastMessageFormated }}
          </p>
        </div>
        <p class="text-xs text-gray-400">
          {{ lastDateFormated }}
        </p>
      </div>
      <p v-if="notif > 0" class="absolute right-0 bottom-0 text-white mb-5 text-center mr-5 bg-green-600 rounded-full w-3 h-3" style="font-size: 0.6rem">
        {{ notif }}
      </p>
    </li>
  </router-link>
</template>

<script>
export default {
  name: 'Room',
  props: {
    roomTitle: {
      type: String,
      default: 'Title',
      required: false
    },
    lastMessage: {
      type: String,
      default: 'last message',
      required: false
    },
    roomId: {
      type: Number,
      required: true
    },
    roomAvatar: {
      type: String,
      required: false
    },
    lastDate: {
      type: String,
      default: '1/1/1990',
      required: false
    },
    notif: {
      type: Number,
      default: 0
    }
  },
  computed: {
    lastDateFormated() {
      const today = new Date().toLocaleDateString()
      const theDate =  new Date(this.lastDate).toLocaleDateString()
      if (today === theDate) {
        return new Date(this.lastDate).toLocaleTimeString()
      } else {
        return new Date(this.lastDate).toLocaleDateString()
      }
    },
    lastMessageFormated() {
      if (this.lastMessage.includes('[file]')) {
        return 'file'
      } else {
        return this.lastMessage
      }
    }
  }
}
</script>

<style>

</style>