import { useMatchStore } from "../store/useMatchStore";

export default function MatchForm() {
  const {
    nameState,
    area,
    location,
    setName,
    setArea,
    setLocation,
    searchConnections,
  } = useMatchStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    searchConnections();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700 font-medium">Nome</label>
          <input
            type="text"
            value={nameState}
            onChange={(e) => setName(e.target.value)}
            className="rounded-lg border border-gray-300 w-80 p-4 mb-4 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-gray-700 font-medium">
            Área de Interesse
          </label>
          <input
            type="text"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="rounded-lg border border-gray-300 w-80 p-4 mb-4 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-gray-700 font-medium">Localização</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="rounded-lg border border-gray-300 w-80 p-4 mb-4 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Buscar Conexões
          </button>
        </div>
      </form>
    </div>
  );
}
