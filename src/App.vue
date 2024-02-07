<script setup>
import Header from './components/Header.vue'
import Inventory from './components/Inventory.vue'
import About from './components/About.vue'
</script>

<template>
  <header>
      <Header/>
  </header>
  
  <main>
 <router-view/>
  </main>
</template>

<style scoped>

</style>
