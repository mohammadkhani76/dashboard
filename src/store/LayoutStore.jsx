import { create } from "zustand";

export const UseLayoutStore = create((set) => ({
  title: "",
  setTitle: (value) => set({ title: value }),
  theme: "dark",
  setTheme: (value) => set({ theme: value }),
}));
