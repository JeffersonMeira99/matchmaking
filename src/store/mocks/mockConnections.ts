import { MatchResult } from "../../types/MatchResult";

export const mockConnections: MatchResult[] = [
  {
    name: "Ana Silva",
    description: "Especialista em IA e aprendizado de máquina.",
    affinity: Math.floor(Math.random() * 21) + 80,
  },
  {
    name: "Carlos Souza",
    description: "Entusiasta de tecnologia e defensor da inovação jurídica.",
    affinity: Math.floor(Math.random() * 21) + 70,
  },
  {
    name: "Mariana Lima",
    description: "Experiência com transformação digital em negócios.",
    affinity: Math.floor(Math.random() * 21) + 75,
  },
];
