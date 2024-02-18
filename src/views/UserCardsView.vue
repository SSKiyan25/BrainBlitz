<script setup lang="ts">
  import UserCards from '../components/UserCardsComponent.vue'
  import { onMounted } from 'vue'
  import { initFlowbite } from 'flowbite'

  onMounted(() => {
    initFlowbite();
  })
</script>

<template>
  <UserCards />
</template>