<script setup lang="ts">

</script>

<template>
  <form class="search-form">
    <div class="search-modal__control">
      <input
        type="text"
        class="search-modal__input"
        placeholder="Enter reddit branch name..."
        ref="search-input"
      >
      <MyIcon
        type="search"
        class="search-modal__icon"
      />
    </div>
  </form>
</template>

<style scoped lang="scss">
.search-form {
  &__control {
    position: relative;
  }

  &__input {
    border: 1px solid #71717a;
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
