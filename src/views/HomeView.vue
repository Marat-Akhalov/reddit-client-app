<script setup lang="ts">
import SearchBranch from '@/components/search/SearchBranch.vue';
import TheHero from '@/layout/TheHero.vue';

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
    flex-direction: column;
    height: 100%;
    margin: auto;
  }
}
</style>
