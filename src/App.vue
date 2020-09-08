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
<style>
.h-custom{
  height: calc(100vh - 4rem);
}
.list-container{
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.list-container::-webkit-scrollbar {
  display: none;
}
</style>
