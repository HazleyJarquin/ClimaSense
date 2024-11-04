import { create } from "zustand";
import { persist } from "zustand/middleware";

type CityState = {
  city: string;
  setCity: (city: string) => void;
};

export const useCityStore = create<CityState>()(
  persist(
    (set) => ({
      city: "Managua",
      setCity: (city) => set({ city }),
    }),
    {
      name: "city-storage",
    }
  )
);
