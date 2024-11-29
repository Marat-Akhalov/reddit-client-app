<script setup lang="ts">

</script>

<template>
  <aside class="sidebar">aside</aside>
</template>

<style scoped lang="scss">
@use '@/assets/scss/abstract/mixins' as *;

.sidebar {
  position: fixed;
  inset: 0;
  flex: 1;
  padding: 1rem;
  width: 100%;
  min-height: 250px;
  height: 100%;
  background-color: red;
  opacity: 0;
  visibility: hidden;
  transform: translateX(-120%);

  @include sm {
    position: static;
    border-radius: 8px;
    background-color: blue;
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
  }
}
</style>
