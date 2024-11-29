<script setup lang="ts">
import BranchList from './BranchList.vue';
import BranchSidebar from './BranchSidebar.vue';


</script>

<template>
  <section class="branch">
    <h2 class="branch__title">Branch name</h2>
    <div class="branch__wrap">
      <BranchSidebar />
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
