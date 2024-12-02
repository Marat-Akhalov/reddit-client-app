<script setup lang="ts">
import SearchBranch from '@/components/search/SearchBranch.vue'
import TheHero from '@/layout/TheHero.vue'
</script>

<template>
  <div class="main__wrapper">
    <TheHero />
    <SearchBranch />
  </div>
</template>

<style scoped lang="scss">
.main {
  &__wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-height: calc(100dvh - 40px);
    margin: auto;
  }
}
</style>
