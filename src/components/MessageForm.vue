<template>
  <div class="absolute bottom-0 w-full bg-gray-300">
    <form v-on:submit.prevent @submit="sendTextMessage">
      <div class="flex items-center justify-between">
        <div class="w-1/6">
          <button class="text-xl focus:outline-none px-4" type="button" @click="attachFile">
            📎
          </button>
        </div>
        <div class="w-4/6">
          <input type="text" class="p-2 rounded my-2 w-full bg-transparant text-sm text-gray-700 focus:outline-none" placeholder="Text message here" v-model="message">
        </div>
        <div class="w-1/6">
          <button class="text-xl focus:outline-none px-4" type="submit">
            🚀
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Emitter from '@/services/emmiter'

export default {
  name: 'MessageForm',
  props: {
    roomId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      message: ''
    }
  },
  methods: {
    sendTextMessage() {
      const ctx = this;
      if (ctx.message) {
        ctx.qiscus.sendComment(ctx.roomId, ctx.message)
        .then(function (comment) {
            ctx.message = ''
            Emitter.$emit('qiscus::new-message')
        })
        .catch(function (error) {
            console.error(error)
        })
      }
    },
    attachFile() {
      alert('not implemented yet')
    }
  }
}
</script>

<style>

</style>