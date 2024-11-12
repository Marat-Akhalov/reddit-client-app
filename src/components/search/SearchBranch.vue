<script setup lang="ts">
import MyIcon from '@/ui/MyIcon.vue';
import { Button, InputGroup } from 'primevue';
import { ref } from 'vue';
import SearchModal from './SearchModal.vue';

const visible = ref<boolean>(false)
</script>

<template>
  <div class="search-branch">
    <form class="search-branch__form">
      <InputGroup class="search-branch__form-control">
        <Button
          class="search-branch__btn"
          label="Search"
          @click="visible = !visible"
        >
          Search
          <MyIcon type="search" />
        </Button>
      </InputGroup>
      <SearchModal />
    </form>
  </div>
</template>

<style scoped lang="scss">
.search-branch {
  max-width: 350px;
  width: 100%;
  align-self: center;

  &__form {
    display: flex;
    width: 100%;
  }

  &__form-control {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  &__btn {}
}

.p-inputgroup>.p-button:not(.p-button-icon-only) {
  width: 100%;
}
</style>
