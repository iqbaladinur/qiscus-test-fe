<template>
  <div class="h-full">
    <top-navbar :is-main-frame="false"/>
    <ul v-if="contactList.length > 0" class="list-container overflow-y-auto h-custom">
      <contact
        v-for="(contact, idx) in contactList"
        :key="idx"
        :username="contact.username"
        :userId="contact.email"
        :avatar="contact.avatar_url"
      />
      <li class="text-center my-2">
        <button class="text-xs rounded bg-blue-400 py-2 px-4" @click="nextPage">
          {{ loadMoreText }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import TopNavbar from '@/components/TopNavbar.vue';
import Contact from '@/components/Contact.vue';

export default {
  name: 'NewChat',
  components: {
    TopNavbar,
    Contact
  },
  data() {
    return {
      perPage: 20,
      page: 1,
      contactList: [],
      loadMoreText: 'Load more',
    }
  },
  mounted() {
    this.loadContactList()
  },
  methods: {
    loadContactList() {
      const ctx = this;
      ctx.qiscus.getUsers('', ctx.page, ctx.limit)
        .then(function ({ meta, users }) {
          ctx.loadMoreText = 'Load more'
          ctx.contactList = [...ctx.contactList, ...users]
        })
        .catch(function (error) {
          ctx.loadMoreText = 'Try again'
          console.error(error)
        })
    },
    nextPage() {
      this.page += 1
      this.loadMoreText = 'Loading..'
      this.loadContactList()
    }
  }
}
</script>

<style>

</style>