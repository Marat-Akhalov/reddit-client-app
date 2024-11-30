<script setup lang="ts">
import ThemeToggle from '@/components/theme/ThemeToggle.vue';
</script>

<template>
  <header class="header">
    <h2 class="header__logo">
      <img
        src="@/assets/img/logo.ico"
        alt="App logo"
        class="header__logo-icon"
        width="80"
        height="80"
      >
      <RouterLink
        :to="{ name: 'home' }"
        class="header__link header__link--logo"
      />
    </h2>
    <ThemeToggle class="header__toggle" />
  </header>
</template>

<style scoped lang="scss">
@use '@/assets/scss/abstract' as *;

.header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  animation: fade-in .2s ease-in;

  @include sm {}

  &__logo {
    position: relative;
    display: none;
    margin: 0;
    margin-right: auto;
    width: 80px;
    height: 80px;

    @include sm {
      display: block;
    }
  }

  &__link {
    &--logo {
      position: absolute;
      inset: 0;
    }
  }

  &__toggle {
    justify-self: flex-end;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
