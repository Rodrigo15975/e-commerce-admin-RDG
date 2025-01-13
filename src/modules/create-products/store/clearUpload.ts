import { create } from 'zustand'

type ResetStore = {
  resetCount: number
  incrementReset: () => void
}

export const useResetStore = create<ResetStore>((set) => ({
  resetCount: 0,
  incrementReset: () => set((state) => ({ resetCount: state.resetCount + 1 })),
}))
