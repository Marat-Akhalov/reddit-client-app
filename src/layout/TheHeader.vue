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
      >
      <RouterLink
        :to="{ name: 'home' }"
        class="header__link header__link--logo"
      />
    </h2>
    <ThemeToggle />
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;

  &__logo {
    position: relative;
    margin: 0;
    margin-right: auto;
    width: 80px;
    height: 80px;

    // &::after {
    //   content: '';
    //   position: absolute;
    //   inset: 0;
    //   z-index: -99;
    //   margin: auto;
    //   border-radius: 50%;
    //   width: 85px;
    //   height: 85px;
    //   filter: blur(24px);
    //   opacity: .5;
    //   background-color: blue;
    // }
  }

  &__logo-icon {}

  &__link {
    &--logo {
      position: absolute;
      inset: 0;
    }
  }
}
</style>
