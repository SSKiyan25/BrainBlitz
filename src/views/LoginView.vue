<script setup lang="ts">
  import Login from '../components/LoginComponent.vue'
  import { onMounted } from 'vue'
  import { initFlowbite } from 'flowbite'

  onMounted(() => {
    initFlowbite();
  })
</script>

<template>
  <Login />
</template>