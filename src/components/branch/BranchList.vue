<script setup lang="ts">
import BranchListItem from './BranchListItem.vue';


</script>

<template>
  <ul class="branch__list list-reset">
    <BranchListItem
      v-for="el in 10"
      :key="el"
    />
  </ul>
</template>

<style scoped lang="scss">
@use '@/assets/scss/abstract' as *;

.branch {
  &__list {
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 8px;

    @include lg {
      flex: 3;
    }
  }
}
</style>
