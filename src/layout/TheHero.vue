<script setup lang="ts">

</script>

<template>
  <section class="hero">
    <div class="hero__logo">
      <img
        src="@/assets/img/logo.svg"
        alt=""
        class="hero__logo-img"
        width="100"
        height="100"
      >
    </div>
    <h1 class="hero__title">Reddit Client App</h1>
    <p class="hero__descr">
      Access the latest threads, comments, and trending content on Reddit in real time with my fast and easy-to-use
      app. Dive into the most interesting discussions and discover what's trending without any hassle. Your new way to
      browse Reddit starts here!
    </p>
  </section>
</template>

<style scoped lang="scss">
.hero {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  align-self: center;
  gap: 16px;

  &__title {
    margin: 0;
  }

  &__descr {
    margin: 0;
    margin-bottom: 16px;
    max-width: 30rem;
    font-size: 1.2rem;
    text-wrap: balance;
    text-align: center;
  }

  &__logo {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      inset: -8px;
      margin: auto;
      z-index: -99;
      border-radius: 50%;
      filter: blur(24px);
      opacity: .5;
      background-color: #e7574f;
      animation: glow 3s ease-in-out infinite;
    }
  }
}

@keyframes glow {

  0%,
  100% {
    opacity: .5;
    transform: scale(1);
  }

  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
}
</style>
