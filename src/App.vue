<script setup lang="ts">
import PageLayout from '@/views/PageLayout.vue'
import TheHeader from '@/layout/TheHeader.vue'
</script>

<template>
  <TheHeader v-show="$route.name && $route.name !== 'home'" />
  <div class="container">
    <PageLayout />
  </div>
</template>

<style scoped></style>
