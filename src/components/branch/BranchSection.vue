<script setup lang="ts">
import { useSidebarStore } from '@/store/sidebar'
import BranchList from './BranchList.vue'
import BranchSidebar from './BranchSidebar.vue'
import { storeToRefs } from 'pinia'

const sidebarStore = useSidebarStore()
const { isOpen } = storeToRefs(sidebarStore)
</script>

<template>
  <section class="branch">
    <h2 class="branch__title">Branch name</h2>
    <div class="branch__wrap">
      <BranchSidebar :class="{ 'sidebar--open': isOpen }" />
      <BranchList />
    </div>
  </section>
</template>

<style scoped lang="scss">
.branch {
  position: relative;

  &__title {
    margin: 0;
    margin-bottom: 16px;
    font-size: 1.5rem;
    text-align: center;
  }

  &__wrap {
    display: flex;
    gap: 16px;
  }
}
</style>
