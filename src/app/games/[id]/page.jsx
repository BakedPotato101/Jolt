import { fetchGameById } from "../../utils/fetchGameById";
import { fetchTeamStatistics } from "../../utils/fetchTeamStatistics";

export default async function Page({ params }) {
  const gameData = await fetchGameById(params.id);
  const game = gameData[0];
  const teamStatsReponse = await fetchTeamStatistics(params.id);

  return (
    <div className="pt-20 space-y-4">
      <h2 className="text-4xl font-bold text-center mb-10">Game Stats</h2>
      <div
        key={game.id}
        className="bg-white rounded-lg border border-gray-200 shadow-md"
      >
        <div className="p-4 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={game.teams.away.logo}
              alt={game.teams.away.name}
              className="h-12 w-12 mr-2"
            />
            <span className="text-lg font-bold">{game.teams.away.name}</span>
          </div>
          <div className="flex items-center">
            <span className="text-lg ml-2">{game.scores.away.overtime}</span>
            <span className="text-lg ml-2">{game.scores.away.quarter_4}</span>
            <span className="text-lg ml-2">{game.scores.away.quarter_3}</span>
            <span className="text-lg ml-2">{game.scores.away.quarter_2}</span>
            <span className="text-lg ml-2">{game.scores.away.quarter_1}</span>
            <span className="text-lg font-bold ml-2">
              {game.scores.away.total}
            </span>
          </div>
        </div>
        <div className="p-4 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={game.teams.home.logo}
              alt={game.teams.home.name}
              className="h-12 w-12 mr-2"
            />
            <span className="text-lg font-bold">{game.teams.home.name}</span>
          </div>
          <div className="flex items-center">
            <span className="text-lg ml-2">{game.scores.home.overtime}</span>
            <span className="text-lg ml-2">{game.scores.home.quarter_4}</span>
            <span className="text-lg ml-2">{game.scores.home.quarter_3}</span>
            <span className="text-lg ml-2">{game.scores.home.quarter_2}</span>
            <span className="text-lg ml-2">{game.scores.home.quarter_1}</span>
            <span className="text-lg font-bold ml-2">
              {game.scores.home.total}
            </span>
          </div>
        </div>
        <div className="p-4">
          <div className="text-gray-600">Team Stats:</div>
          <div className="text-gray-600">
            {teamStatsReponse.map((teamStats) => (
              <div key={teamStats.id} className="bg-gray-100 rounded-lg border border-gray-200 shadow-md p-4 mb-4">
                <div className="flex items-center mb-4">
                  <img
                    src={teamStats.team.logo}
                    alt={teamStats.team.name}
                    className="h-12 w-12 mr-2"
                  />
                  <h3 className="text-lg font-bold">{teamStats.team.name}</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="font-semibold">First Downs</div>
                    <div>
                      Passing: {teamStats.statistics.first_downs.passing}
                    </div>
                    <div>
                      Rushing: {teamStats.statistics.first_downs.rushing}
                    </div>
                    <div>
                      Penalties:{" "}
                      {teamStats.statistics.first_downs.from_penalties}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">Yards</div>
                    <div>Total: {teamStats.statistics.yards.total} yards</div>
                    <div>
                      Passing: {teamStats.statistics.passing.total} yards
                    </div>
                    <div>
                      Rushing: {teamStats.statistics.rushings.total} yards
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">Efficiency</div>
                    <div>
                      3rd Down:{" "}
                      {teamStats.statistics.first_downs.third_down_efficiency}
                    </div>
                    <div>
                      4th Down:{" "}
                      {teamStats.statistics.first_downs.fourth_down_efficiency}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">Turnovers</div>
                    <div>Total: {teamStats.statistics.turnovers.total}</div>
                    <div>
                      Interceptions:{" "}
                      {teamStats.statistics.turnovers.interceptions}
                    </div>
                    <div>
                      Fumbles Lost:{" "}
                      {teamStats.statistics.turnovers.lost_fumbles}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
