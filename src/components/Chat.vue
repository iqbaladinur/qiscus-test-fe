<template>
  <div class="flex my-2 p-3" :class="{ 'justify-end items-center' : isAdmin }">
    <div class="w-auto flex">
      <div class="mx-2" v-if="isAdmin">
        <status :status="chatObject.status" />
      </div>
      <div class="bg-gray-200 p-2 text-xs" :class="{ 'rounded-l-lg rounded-br-lg' : isAdmin, 'rounded-r-lg rounded-bl-lg' : !isAdmin}">
        <p class="text-gray-500" style="font-size: 0.5rem">{{dateFormat}}</p>
        <p v-if="chatObject.type === 'text'">
          {{ message }}
        </p>
        <a v-else-if="chatObject.type === 'file_attachment'" :href="chatObject.payload.url">
          <img :src="chatObject.payload.url" alt="thumbnail" class="w-32">
        </a>
      </div>
      <div class="mx-2" v-if="!isAdmin">
      </div>
    </div>
  </div>
</template>

<script>
import Status from '@/components/MessageStatus';
export default {
  name: 'Chat',
  components: {
    Status
  },
  props: {
    message: {
      type: String,
      default: ''
    },
    time: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    chatObject: {
      type: Object,
      required: true
    }
  },
  computed: {
    isAdmin() {
      const userData = this.$store.state.userData
      return userData.email === this.email
    },
    dateFormat() {
      return new Date(this.time).toLocaleString()
    }
  }
}
</script>

<style>

</style>