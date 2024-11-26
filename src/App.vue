<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import PageLayout from './views/PageLayout.vue';
const TheHeader = defineAsyncComponent(() => import('@/layout/TheHeader.vue'))
</script>

<template>
  <TheHeader v-show="$route.name && $route.name !== 'home'" />
  <div class="container">
    <PageLayout />
  </div>
</template>

<style scoped></style>
