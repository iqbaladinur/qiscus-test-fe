<template>
  <div class="flex" :class="{ 'justify-end items-center' : isAdmin }">
    <div class="w-auto">
      <sup>
        {{time}}
      </sup>
      <div class="bg-gray-200 p-2 text-xs">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chat',
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
    }
  },
  computed: {
    isAdmin() {
      const userData = this.$store.state.userData
      return userData.email === this.email
    }
  }
}
</script>

<style>

</style>