<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="load">
      load
    </button>
  </div>
</template>
<script>
export default {
  name: 'DashboardListRoom',
  mounted() {
    
  },
  methods: {
    load(){
      this.qiscus.loadRoomList()
      .then(room => {
        console.info(room)
      })
      .catch(err => {
        console.error(err)
      })
    }
  }
}
</script>