<script setup lang="ts"></script>

<template>
  <li class="branch__item">item</li>
</template>

<style scoped lang="scss">
.branch {
  &__item {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    min-height: 250px;
    background-color: var(--clr-modal-bg);
  }
}
</style>
