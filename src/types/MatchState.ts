import { MatchResult } from "./MatchResult";

export interface MatchState {
  nameState: string;
  area: string;
  location: string;
  results: MatchResult[];
  isModalOpen: boolean;
  setName: (nome: string) => void;
  setArea: (area: string) => void;
  setLocation: (localizacao: string) => void;
  setModalOpen: (isOpen: boolean) => void;
  searchConnections: () => void;
}
