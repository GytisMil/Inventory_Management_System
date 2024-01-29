<script setup>
function name(event) {
  if(event) {
    alert(event.target.innerHTML)
  }
}
</script>

<template>
  <div @click="name">
  Register
  </div>
  <div @click="name">
  Log In
  </div>
</template>
<style scoped>

</style>
