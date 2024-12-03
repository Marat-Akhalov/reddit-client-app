<script setup lang="ts"></script>

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
  padding-top: 56px;
  width: 100%;
  min-height: 250px;
  height: 100%;
  background-color: var(--clr-modal-bg);
  opacity: 0;
  visibility: hidden;
  transform: translateX(-120%);
  transition: transform 0.2s ease-in-out;

  &--open {
    transform: translateX(0);
    visibility: visible;
    opacity: 1;
  }

  @include sm {
    position: static;
    border-radius: 8px;
    padding: 1.5rem;
    opacity: 1;
    visibility: visible;
    background-color: blue;
    transform: translateX(0);
  }
}
</style>
