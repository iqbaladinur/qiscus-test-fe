<template>
  <div id="app">
    <div class="flex justify-center">
      <div class="lg:w-1/5 w-full bg-white h-screen rounded-lg shadow">
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
}
</script>
<style lang="scss">

</style>
