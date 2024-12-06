import { create } from "zustand";

type Store = {
  isSearchOpen: boolean;
  setIsSearchOpen: () => void;
};

const useSearchStore = create<Store>()((set) => ({
  isSearchOpen: false,
  setIsSearchOpen: () =>
    set((state: { isSearchOpen: boolean }) => ({
      isSearchOpen: !state.isSearchOpen,
    })),
  setIsSearchOpenFalse: () => set(() => ({ isSearchOpen: false })),
}));

export default useSearchStore;
