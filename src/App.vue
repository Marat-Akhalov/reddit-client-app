<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import PageLayout from './views/PageLayout.vue';
const TheHeader = defineAsyncComponent(() => import('@/layout/TheHeader.vue'))
const ThemeToggle = defineAsyncComponent(() => import('@/components/theme/ThemeToggle.vue'))
</script>

<template>
  <TheHeader v-if="$route.name && $route.name !== 'home'" />
  <ThemeToggle
    v-else
    class="toggle-theme"
  />
  <div class="container">
    <PageLayout />
  </div>
</template>

<style scoped>
.toggle-theme {
  position: absolute;
  top: 20px;
  right: var(--container-offset);
}
</style>
