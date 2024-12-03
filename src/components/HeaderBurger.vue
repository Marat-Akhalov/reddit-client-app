<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref<boolean>(false)

const emit = defineEmits<{
  (e: 'toggle-burger', isOpen: boolean): void
}>()

const toggle = () => {
  isOpen.value = !isOpen.value
  emit('toggle-burger', isOpen.value)
}
</script>

<template>
  <button
    class="btn-reset burger"
    :class="{ 'burger--open': isOpen }"
    aria-label="Open sidebar"
    :aria-expanded="isOpen"
    @click="toggle"
  >
    <span class="burger__line"></span>
  </button>
</template>

<style scoped lang="scss">
@use '../assets/scss/abstract' as *;

.burger {
  position: relative;
  z-index: 99;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  width: 32px;
  height: 20px;
  cursor: pointer;
  background-color: transparent;

  &__line,
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--clr-text);
    transition: transform 0.2s ease-in-out;
  }

  &::after {
    transform: translateY(8px);
  }

  &__line {
    transform: translateY(0);
  }

  &::before {
    transform: translateY(-8px);
  }

  @include sm {
    display: none;
  }
}

.burger--open {
  .burger__line {
    opacity: 0;
  }

  &::after {
    transform: rotate(45deg);
  }

  &::before {
    transform: rotate(-45deg);
  }
}
</style>
