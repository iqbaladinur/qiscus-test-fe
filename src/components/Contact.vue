<template>
  <li class="flex p-3">
    <div class="w-1/6">
      <img loading="lazy" :src="avatar" class="w-10 h-10 rounded-full object-cover">
    </div>
    <div class="w-5/6 flex items-start pb-2 border-b" @click="createOnetoOneRoom">
      <p class="text-sm text-gray-600">
        {{ username }}
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
  methods: {
    createOnetoOneRoom() {
      const ctx = this;
      if (ctx.mode === 'onetoone') {
        ctx.qiscus.chatTarget(ctx.userId)
        .then(function (room) {
            ctx.$router.push('/dashboard')
        })
        .catch(function (error) {
            console.error('error create room: ', error)
        })
      }
    }
  }
}
</script>
