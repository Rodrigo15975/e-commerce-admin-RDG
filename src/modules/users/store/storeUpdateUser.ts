import { create } from 'zustand'

type Store = {
  dataUpdate: UpdateUser
  // eslint-disable-next-line no-unused-vars
  setDataUpdate: (data: UpdateUser) => void
}

export const storeUpdateUser = create<Store>((set) => ({
  dataUpdate: {
    id: undefined,
    dni: '',
    lastname: '',
    name: '',
    password: '',
    phone: '',
    role: {
      role: 'EMPLOYEE',
    },
    auditoria: {
      id: undefined,
      role: '',
    },
    user_active: true,
  },
  setDataUpdate(data) {
    set((prev) => ({
      dataUpdate: {
        ...prev.dataUpdate,
        ...data,
      },
    }))
  },
}))
