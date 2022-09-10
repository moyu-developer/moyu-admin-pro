import create from "zustand";

export interface LoginStore {
  
  updated: (payload: Partial<LoginStore>) => void
}

const useGlobalStore = create<LoginStore>((set) => ({

  updated: (payload) => set((state) => ({
    ...state,
    ...payload
  }))
}))

export default useGlobalStore