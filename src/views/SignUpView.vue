<script setup lang="ts">
  import SignUp from '../components/SignUpComponent.vue'
  import { onMounted } from 'vue'
  import { initFlowbite } from 'flowbite'

  onMounted(() => {
    initFlowbite();
  })
</script>

<template>
  <SignUp />
</template>