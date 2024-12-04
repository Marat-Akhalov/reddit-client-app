<script setup lang="ts">
import HeaderBurger from '@/components/HeaderBurger.vue'
import ThemeToggle from '@/components/theme/ThemeToggle.vue'
import { useSidebarStore } from '@/store/sidebar'

const sidebarStore = useSidebarStore()
const { toggleSidebar } = sidebarStore
</script>

<template>
  <header class="header">
    <h2 class="header__logo">
      <img
        src="@/assets/img/logo.ico"
        alt="App logo"
        class="header__logo-icon"
        width="68"
        height="68"
      />
      <RouterLink
        :to="{ name: 'home' }"
        class="header__link header__link--logo"
      />
    </h2>
    <HeaderBurger @toggle-burger="toggleSidebar" />
    <ThemeToggle class="header__toggle" />
  </header>
</template>

<style scoped lang="scss">
@use '@/assets/scss/abstract' as *;

.header {
  position: sticky;
  top: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  backdrop-filter: blur(15px);
  animation: fade-in 0.2s ease-in;

  @include sm {
    padding: 8px;
  }

  &__logo {
    position: relative;
    display: none;
    margin: 0;
    margin-right: auto;
    width: 68px;
    height: 68px;

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
