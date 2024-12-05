import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useArticlesStore = defineStore('articles', () => {
  const articles = ref([])
  const isLoading = ref<boolean>(false)
  const isBranchValid = ref<boolean | null>(null)
  const error = ref<string | null>(null)

  const getArticles = async (branchName: string | string[]) => {
    if (Array.isArray(branchName)) {
      branchName = branchName.join('')
    }

    isLoading.value = true
    isBranchValid.value = null
    error.value = null

    try {
      const response = await fetch(
        `https://www.reddit.com/r/${branchName}.json`,
      )

      console.log(response)

      if (!response.ok) {
        isBranchValid.value = false
        articles.value = []
        return
      }

      const data = await response.json()
      articles.value = data.data.children.map(child => child.data)
      isBranchValid.value = true

      console.log(data)
    } catch (err) {
      error.value = 'Failed to fetch articles'
      isBranchValid.value = false

      console.log(err)
    } finally {
      isLoading.value = false
    }
  }

  return {
    articles,
    isLoading,
    isBranchValid,
    error,
    getArticles,
  }
})
