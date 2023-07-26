import { getCurrentInstance } from 'vue'

export function useContext() {
  const app = getCurrentInstance()
  const { globalProperties } = app?.appContext.config || {}

  return {
    ...globalProperties,
  }
}
