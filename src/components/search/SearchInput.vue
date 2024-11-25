<script setup lang="ts">
import MyIcon from '@/ui/MyIcon.vue';
import { ref } from 'vue';

const emit = defineEmits<{
  (e: 'search-branch', searchQuery: string): void
}>()

const searchQuery = ref<string>('')
</script>

<template>
  <form
    class="search-form"
    @submit.prevent="emit('search-branch', searchQuery)"
  >
    <div class="search-form__control">
      <input
        v-model="searchQuery"
        type="text"
        class="search-form__input"
        placeholder="Enter reddit branch name..."
      >
      <MyIcon
        type="search"
        class="search-form__icon"
      />
    </div>
  </form>
</template>

<style scoped lang="scss">
.search-form {
  width: 100%;

  &__control {
    position: relative;
  }

  &__input {
    border: 1px solid #52525b;
    border-radius: 8px;
    padding: 0.5rem .75rem;
    padding-left: 2rem;
    width: 100%;
    font-size: 1rem;
    color: var(--clr-text);
    outline: none;
    appearance: none;
    transition: border-color .2s ease-in-out;

    &:focus-visible {
      border-color: #34d399;
    }
  }

  &__icon {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 12px;
    margin: auto;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
