import { fetchPlayer } from "../utils/fetchPlayer";

export default function PlayerPage() {
  const [playerStats, setPlayerStats] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const players = await fetchPlayer();
        setPlayerStats(players);
      } catch (error) {
        console.error("Error fetching player stats:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Player Statistics</h1>
      
      {playerStats && playerStats.length > 0 && (
        <ul className="divide-y divide-gray-300">
          {playerStats.map((player) => (
            <li key={player.id} className="py-2">
              <strong>{player.name}</strong> - {player.position}
            </li>
          ))}
        </ul>
      )}

      {playerStats && playerStats.length === 0 && (
        <p>No player statistics available</p>
      )}
    </div>
  );
}
