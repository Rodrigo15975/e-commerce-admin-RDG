import { create } from 'zustand'

type Store = {
  openFormCreateDiscount: boolean
  setOpenFormCreateDiscount: () => void

  // eslint-disable-next-line no-unused-vars
  setIdDiscount: (id: number | undefined) => void
  idDiscount: number | undefined
}

export const storeCreateDiscountCategorie = create<Store>((set, get) => ({
  openFormCreateDiscount: false,
  idDiscount: undefined,
  setIdDiscount(idDiscount) {
    set({ idDiscount })
  },
  setOpenFormCreateDiscount() {
    const { openFormCreateDiscount } = get()
    set({ openFormCreateDiscount: !openFormCreateDiscount })
  },
}))
