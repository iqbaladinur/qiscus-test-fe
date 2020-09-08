<template>
  <div class="h-full">
    <top-navbar :is-main-frame="false"/>
    <ul v-if="contactList.length > 0" class="list-container overflow-y-auto h-custom">

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
      contactList: []
    }
  }
}
</script>

<style>

</style>