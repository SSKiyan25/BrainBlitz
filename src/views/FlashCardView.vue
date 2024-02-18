<script setup lang="ts">
  import FlashCard from '../components/Forms/FlashCard.vue'
  import { onMounted } from 'vue'
  import { initFlowbite } from 'flowbite'

  onMounted(() => {
    initFlowbite();
  })
</script>

<template>
  <FlashCard />
</template>