<template>
  <li class="flex p-3" @click="createOnetoOneRoom">
    <div class="w-1/6">
      <img loading="lazy" :src="avatar" class="w-10 h-10 rounded-full object-cover">
    </div>
    <div class="w-5/6 flex items-start pb-2 border-b">
      <p class="text-sm text-gray-600">
        {{ username }} <br>
        <span v-if="isCreatingRoom" class="text-xs text-gray-400">
          creating..
        </span>
      </p>
    </div>
  </li>
</template>

<script>
export default {
  name: 'Contact',
  props: {
    username: {
      type: String,
      default: 'username',
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    userId: {
      type: String,
      required: true
    },
    mode: {
      type: String,
      default: 'onetoone',
    }
  },
  data() {
    return {
      isCreatingRoom: false
    }
  },
  methods: {
    createOnetoOneRoom() {
      const ctx = this;
      if (ctx.mode === 'onetoone') {
        ctx.isCreatingRoom = true
        ctx.qiscus.chatTarget(ctx.userId)
        .then(function (room) {
          ctx.isCreatingRoom = false
          ctx.$router.push(`/room?roomId=${room.id}&title=${room.name}`)
        })
        .catch(function (error) {
          ctx.isCreatingRoom = false
          console.error('error create room: ', error)
        })
      }
    }
  }
}
</script>
