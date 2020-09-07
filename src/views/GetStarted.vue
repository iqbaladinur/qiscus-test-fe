<template>
  <div class="h-full bg-white flex items-center">
    <form action="#" class="p-16">
      <label for="userid">
        User ID
      </label>
      <input type="text" class="startedForm focus:border-white" name="userid">
      <label for="userid">
        Username
      </label>
      <input type="text" class="startedForm focus:border-white" name="username">
      <label for="userid">
        User Key
      </label>
      <input type="password" class="startedForm focus:border-white" name="userkey">
      <button class="rounded bg-blue-400 px-4 py-2 mt-5">
        Get Started
      </button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'GetStarted',
}
</script>
<style lang="postcss" scoped>
.startedForm {
  @apply p-2 w-full my-2 rounded bg-transparent border-b-2 border-green-200;
}
</style>
