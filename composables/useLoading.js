

export const useLoading = callback => {
  const isLoading = ref(false)
  async function callApi() {
    if (isLoading.value) return
    isLoading.value = true
    try {
      const response = await callback(...arguments)
      return response
    } catch (error) {
    } finally {
      isLoading.value = false
    }
  }
  return { isLoading, callApi }
}
