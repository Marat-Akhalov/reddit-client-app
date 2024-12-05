<script setup lang="ts">
import MyIcon from '@/components/ui/MyIcon.vue'
import { Button, InputGroup } from 'primevue'
import { defineAsyncComponent, ref } from 'vue'
import SearchInput from './SearchInput.vue'
import { useRouter } from 'vue-router'
const SearchModal = defineAsyncComponent(
  () => import('@/components/search/SearchModal.vue'),
)

const router = useRouter()

const visible = ref<boolean>(false)
const openModal = () => {
  visible.value = !visible.value
}

/**
 * TODO: написать нормальную валидацию при невалидной строке поиска
 */
const handleSearch = (searchQuery: string) => {
  if (!searchQuery) return

  router.push({ name: 'r-branch', params: { branchName: searchQuery } })
}
</script>

<template>
  <div class="search-branch">
    <form class="search-branch__form">
      <InputGroup class="search-branch__form-control">
        <Button
          class="search-branch__btn"
          label="Search"
          @click="openModal"
        >
          Search
          <MyIcon type="search" />
        </Button>
      </InputGroup>
      <SearchModal
        v-if="visible"
        v-model:visible="visible"
      >
        <SearchInput @search-branch="handleSearch" />
      </SearchModal>
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
}

.p-inputgroup > .p-button:not(.p-button-icon-only) {
  width: 100%;
}
</style>
