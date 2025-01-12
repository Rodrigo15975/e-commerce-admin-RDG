import { create } from "zustand"

type Store = {
  isOpenDialogForm: boolean
  setIsOpenDialogForm: () => void
}

export const storeOpenDialogForm = create<Store>((set, get) => ({
  isOpenDialogForm: false,
  setIsOpenDialogForm() {
    const { isOpenDialogForm } = get()
    set({ isOpenDialogForm: !isOpenDialogForm })
  },
}))
