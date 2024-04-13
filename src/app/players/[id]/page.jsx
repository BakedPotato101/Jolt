import fetchPlayerStatisticById from "../../utils/fetchPlayerStatisticById";

export default async function PlayerProfilePage({ params }) {
  const playerStats = await fetchPlayerStatisticById(params.id);
  if (!playerStats || playerStats.length === 0) {
    return (
      <div className="text-center mt-4">Player statistics not available.</div>
    );
  }
  const { player = {}, teams = [] } = playerStats[0] || {};
  const { name = "Unknown Player", image = "/default-player-image.png" } =
    player;

  return (
    <div className="w-full flex flex-col items-center p-6">
      <div className="text-center">
        <h1 className="text-xl font-bold">{name}</h1>
        <img
          src={image}
          alt={name}
          className="mx-auto my-4 w-24 h-24 object-cover rounded-full"
        />
      </div>
      {teams.length > 0 ? (
        teams.map((team, index) => (
          <div key={index} className="my-4">
            <h2 className="text-lg text-center font-semibold">
              {team.team?.name || "Unknown Team"}
            </h2>
            <img
              src={team.team?.logo || "/default-team-logo.png"}
              alt={team.team?.name || "Team Logo"}
              className="mx-auto my-2 w-20 h-20"
            />
            <div className="flex gap-20 justify-center w-full">
              {team.groups?.map((group, groupIndex) => (
                <div
                  key={groupIndex}
                  className="mt-4 p-4 bg-gray-100 rounded shadow w-full max-w-sm"
                >
                  <h3 className="text-md font-semibold mb-2">{group.name}</h3>
                  <ul>
                    {group.statistics?.map((stat, statIndex) => (
                      <li
                        key={statIndex}
                        className="flex justify-between items-center py-1"
                      >
                        <span className="text-gray-600">
                          {stat.name?.replace(/_/g, " ") || "Unknown Stat"}
                        </span>
                        <span className="font-medium">
                          {stat.value || "N/A"}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="text-center mt-4">No team information available.</div>
      )}
    </div>
  );
}
