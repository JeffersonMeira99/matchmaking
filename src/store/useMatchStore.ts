import { create } from "zustand";
import { MatchState } from "../types/MatchState";
import { mockConnections } from "./mocks/mockConnections";

export const useMatchStore = create<MatchState>((set) => ({
  nameState: "",
  area: "",
  location: "",
  results: [],
  isModalOpen: false,
  setName: (nameState) => set({ nameState }),
  setArea: (area) => set({ area }),
  setLocation: (location) => set({ location }),
  setModalOpen: (isOpen) => set({ isModalOpen: isOpen }),

  searchConnections: () => {
    set({ results: mockConnections, isModalOpen: true });
  },
}));
