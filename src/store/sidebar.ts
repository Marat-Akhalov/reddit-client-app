import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSidebarStore = defineStore('sidebar', () => {
  const isOpen = ref<boolean>(false)

  const toggleSidebar = () => {
    isOpen.value = !isOpen.value
  }

  return { isOpen, toggleSidebar }
})
