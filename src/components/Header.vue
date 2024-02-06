<script setup>
function name(event) {
  if(event) {
    alert(event.target.innerHTML)
  }
}
</script>

<template>
  <div class="Navigation">
    <div @click="name">
      Home
    </div>
    <div @click="name">
      About
    </div>
  </div>
  <div class="Login">
    <div @click="name">
    Register
    </div>
    <div @click="name">
    Log In
    </div>
  </div>
</template>
<style scoped>

</style>
