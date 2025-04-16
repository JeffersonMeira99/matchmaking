import { useMatchStore } from "../store/useMatchStore";
import { FaTimes } from "react-icons/fa";

export default function MatchResults() {
  const { results, isModalOpen, setModalOpen } = useMatchStore();

  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300"
      style={{ backgroundColor: "#00000094", opacity: isModalOpen ? 1 : 0 }}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <button
          onClick={() => setModalOpen(false)}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl font-bold cursor-pointer"
          aria-label="Fechar"
        >
          <FaTimes className="h-6 w-6" />
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
          Conexões Encontradas
        </h2>

        <div className="space-y-4">
          {results.map((person, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-md shadow border"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {person.name}
              </h3>
              <p className="text-gray-600">{person.description}</p>
              <p className="text-blue-600 font-bold mt-2">
                Afinidade: {person.affinity}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
