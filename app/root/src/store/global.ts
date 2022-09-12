import create from "zustand";

export interface GlobalStore {
  themeMode: 'dark' | 'light',
  updated: (payload: Partial<GlobalStore>) => void
}

const useGlobalStore = create<GlobalStore>((set) => ({
  
  /** 设置 */
  themeMode: 'light',

  updated: (payload) => set((state) => ({
    ...state,
    ...payload
  }))
}))

export default useGlobalStore