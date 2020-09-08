<template>
  <div class="absolute top-0 w-full px-4 pt-16 h-screen bg-black bg-opacity-50">
    <slot></slot>
    <form v-on:submit.prevent @submit="createGroupRoom" class="bg-white p-4 rounded-t-lg">
      <label class="text-gray-500 text-sm" for="roomName">
        Group Name
      </label>
      <input type="text" class="mt-2 focus:border-white rounded bg-gray-300 p-2 w-full text-xs" placeholder="Nongkrong" name="roomName" v-model="roomName">
      <button class="px-4 py-2 rounded bg-blue-400 text-xs mt-2">
        Create Group
      </button>
    </form>
    <ul class="bg-white h-modal overflow-y-auto list-container rounded-b-lg">
      <div
        v-for="(contact, idx) in contactList"
        :key="idx"
        @click="addUserId(contact.email)"
        :class="{ 'bg-gray-300' : selectedUserId.includes(contact.email) }"
      >
        <contact
          class="cursor-pointer"
          :username="contact.username"
          :userId="contact.email"
          :avatar="contact.avatar_url"
          mode="no"
        />
      </div>
    </ul>
  </div>
</template>

<script>
import Contact from '@/components/Contact.vue';

export default {
  name: 'FormGroupChat',
  components: {
    Contact
  },
  data() {
    return {
      roomName: null,
      contactList: [],
      selectedUserId: []
    }
  },
  mounted() {
    this.loadContactList()
  },
  methods: {
    addUserId(userid) {
      console.log('clicked')
      if (!this.selectedUserId.includes(userid)) {
        this.selectedUserId.push(userid)
      }else{
        this.selectedUserId = this.selectedUserId.filter(v => v !== userid)
      }
    },
    createGroupRoom() {
      const ctx = this;
      ctx.qiscus.createGroupRoom(ctx.roomName.trim(), ctx.selectedUserId)
        .then(room => {
          //do
        })
        .catch(error => {
          console.error(error)
        })
    },
    loadContactList() {
      const ctx = this;
      ctx.qiscus.getUsers('', 1, 100)
        .then(function ({ meta, users }) {
          ctx.contactList = users
        })
        .catch(function (error) {
          console.error(error)
        })
    },
  }
}
</script>

<style scoped>
  .h-modal{
    height: 70vh
  }
</style>>
