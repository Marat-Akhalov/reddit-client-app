<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import MyIcon from '@/components/ui/MyIcon.vue'

const isDark = useDark()
const toggle = useToggle(isDark)
</script>

<template>
  <button
    class="toggle-theme"
    @click="toggle()"
  >
    <Transition
      name="icon"
      mode="out-in"
    >
      <MyIcon
        v-if="isDark"
        type="sun"
      />
      <MyIcon
        v-else
        type="moon"
      />
    </Transition>
  </button>
</template>

<style scoped lang="scss">
.toggle-theme {
  position: relative;
  z-index: 99;
  display: inline-flex;
  border: none;
  padding: 4px;
  background-color: transparent;
  cursor: pointer;
}

.icon-enter-active {
  animation: fade-in 0.2s ease-in;
}

.icon-leave-active {
  animation: fade-in 0.2s ease-in reverse;
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(-4px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
