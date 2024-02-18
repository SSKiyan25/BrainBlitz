<script setup lang="ts">
  import LaunchPage from '../components/LaunchPageComponent.vue'
  import { onMounted } from 'vue'
  import { initFlowbite } from 'flowbite'

  onMounted(() => {
    initFlowbite();
  })

</script>

<template>
  <LaunchPage />
</template>