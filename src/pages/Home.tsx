import MatchForm from "../components/MatchForm";
import MatchResults from "../components/MatchResults";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 p-4">
      <div className="flex flex-col items-center text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Match Inteligente</h1>
        <MatchForm />
        <MatchResults />
      </div>
    </div>
  );
}
