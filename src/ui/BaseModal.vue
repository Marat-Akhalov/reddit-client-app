<script setup lang="ts">
const visible = defineModel<boolean>('visible', { default: false })

const closeModal = () => {
  visible.value = false
}

const onClickOutside = (e: Event) => {
  const target = e.target as HTMLElement;

  if (target.closest('.modal')) return;

  console.log(target);

  closeModal()
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="visible"
      @click="onClickOutside"
      class="modal-mask"
    >
      <transition
        name="modal"
        appear
      >
        <div
          v-if="visible"
          class="modal"
        >
          <button
            class="modal__close btn-reset"
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
          <slot>
            Temporary content
          </slot>
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
    content: "";
    position: absolute;
    inset: 0;
    background-color: #000;
    opacity: .5;
  }
}

.modal {
  position: relative;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #3f3f46;
  border-radius: 12px;
  margin: auto;
  padding: 20px;
  max-width: 450px;
  width: 100%;
  overflow-y: auto;
  opacity: 1;
  transform: scale(1);
  color: var(--clr-text);
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

.modal-enter-active {
  animation: fade .2s ease-in-out;
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
