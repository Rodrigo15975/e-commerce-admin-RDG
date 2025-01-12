import { create } from 'zustand'

type InputSearchGlobalStore = {
  isOpenSearch: boolean
  setIsOpenSearch: () => void
}

export const storeInputGlobalSearchStore = create<InputSearchGlobalStore>(
  (set, get) => ({
    isOpenSearch: false,
    setIsOpenSearch() {
      const { isOpenSearch } = get()
      set({ isOpenSearch: !isOpenSearch })
    },
  })
)
