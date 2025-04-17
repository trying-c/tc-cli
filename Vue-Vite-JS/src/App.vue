<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { useStore } from '@/stores';
const store = useStore()
</script>

<template>
  <HelloWorld :msg="store.title" />
</template>

<style scoped>

</style>
