import { create } from "zustand";
import { persist } from "zustand/middleware";

type ModeState = {
  isDarkTheme: boolean;
  setIsDarkTheme: (value: boolean) => void;
};

export const useDarkMode = create<ModeState>()(
  persist(
    (set) => ({
      isDarkTheme: false,
      setIsDarkTheme: (value) => set({ isDarkTheme: value }),
    }),
    {
      name: "dark-mode-storage",
    }
  )
);
