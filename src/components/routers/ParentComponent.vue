<template>
  <div class="d-flex h-100">
    <div class="left-bar d-flex flex-column left-bar">
      <router-link to="/">navigation to child 1</router-link>
      <router-link to="child2">navigation to child 2</router-link>
    </div>
    <div class="right-side w-100">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.left-bar {
  width: 20%;
  background-color: grey;
}
.right-side {
  background-color: aquamarine;
}
</style>
