import create from "zustand";
import { Page } from "pages/types";

type State = {
  currentPage: Page;
  changeCurrentPage: (to: Page) => void;
};

export const useStore = create<State>((set) => ({
  currentPage: "settings",
  changeCurrentPage: (to) => set({ currentPage: to }),
}));
