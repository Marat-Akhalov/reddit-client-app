<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

const visible = defineModel<boolean>('visible', { required: true })

const closeModal = () => (visible.value = false)

/**
 * TODO: отрефакторить и привести к более лаконичному виду
 */
const onClickOutside = (e: Event) => {
  const target = e.target as HTMLElement

  if (target.closest('.search-modal')) return

  closeModal()
}

const handleEscClick = (e: KeyboardEvent) => {
  const key = e.key

  if (key !== 'Escape') return

  closeModal()
}

onMounted(() => {
  document.addEventListener('keydown', handleEscClick)
  document.body.classList.add('overflow')
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscClick)
  document.body.classList.remove('overflow')
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="visible"
      class="modal-mask"
      @click="onClickOutside"
    >
      <transition
        name="search-modal"
        appear
      >
        <div
          v-if="visible"
          @click="onClickOutside"
          class="search-modal"
        >
          <button
            class="search-modal__close btn-reset"
            @click="closeModal"
            aria-label="Close modal window"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 50 50"
              fill="currentColor"
            >
              <path
                d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"
              ></path>
            </svg>
          </button>
          <slot> Temporary content </slot>
        </div>
      </transition>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.modal-mask {
  position: fixed;
  inset: 0;
  z-index: 10;
  display: flex;
  place-items: center;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: #000;
    opacity: 0.5;
  }
}

.search-modal {
  position: relative;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #3f3f46;
  border-radius: 12px;
  margin: auto;
  padding: 20px;
  padding-top: 36px;
  max-width: 450px;
  width: 100%;
  overflow-y: auto;
  color: var(--clr-text);
  opacity: 1;
  transform: scale(1);
  background-color: var(--clr-modal-bg);

  &__close {
    position: absolute;
    right: 0;
    top: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    cursor: pointer;
  }
}

.search-modal-enter-active {
  animation: fade 0.2s ease-in-out;
}

@keyframes fade {
  0% {
    transform: translateY(-10px) scale(0.9);
  }

  100% {
    transform: translateY(0px) scale(1);
  }
}
</style>
