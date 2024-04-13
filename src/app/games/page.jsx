import { fetchGames } from "../utils/fetchGames";
import Link from "next/link";

export default async function Page() {
  const gameData = await fetchGames();
  console.log("fetched games", gameData);

  return (
    <div className="pt-20 space-y-4">
      <h1 className="text-3xl font-bold text-center mb-10">Games</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        {gameData.map((game) => {
          // Assuming the structure of your game object is correct
          const homeScore = game.scores.home.total;
          const awayScore = game.scores.away.total;
          const isHomeWinner = homeScore > awayScore;

          return (
            <Link
              className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100"
              href={`/games/${game.game.id}`}
              key={game.id}
            >
              <div className="flex justify-between items-center mb-4">
                <img
                  src={game.teams.home.logo}
                  alt={game.teams.home.name}
                  className="h-16 w-16 mr-2"
                />
                <span className="text-lg font-bold">
                  {game.teams.home.name}
                </span>
                <span
                  className={`text-lg font-bold ${
                    isHomeWinner ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {homeScore}
                </span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <img
                  src={game.teams.away.logo}
                  alt={game.teams.away.name}
                  className="h-16 w-16 mr-2"
                />
                <span className="text-lg font-bold">
                  {game.teams.away.name}
                </span>
                <span
                  className={`text-lg font-bold ${
                    isHomeWinner ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {awayScore}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{game.date}</span>
                <span className="text-gray-600">{game.time}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
