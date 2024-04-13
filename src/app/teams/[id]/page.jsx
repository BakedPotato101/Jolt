import fetchPlayersByTeam from "@/app/utils/fetchPlayersByTeam";
import fetchTeamById from "../../utils/fetchTeamById";
import Link from "next/link";

export default async function page(params) {
  const id = params.params.id;
  const teamData = await fetchTeamById(id);
  const team = teamData[0];
  const playerData = await fetchPlayersByTeam(id);
  console.log(playerData);
  console.log(team[0]);
  return (
    <div className="bg-gray-800 min-h-screen text-white p-8 pt-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold">
              {team.name || "Unknown Team"}
            </h1>
            <p className="text-lg">
              {team.city
                ? team.city + ", " + team.country.name
                : "Location not available"}
            </p>
          </div>
          <img
            src={team.logo || "https://via.placeholder.com/150"}
            alt={team.name || "Team Logo"}
            className="w-24 h-24 object-contain"
          />
        </div>

        <div className="grid grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-xl font-semibold mb-2">Team Details</h2>
            <p>Coach: {team.coach || "Missing information"}</p>
            <p>Owner: {team.owner || "Missing information"}</p>
            <p>Stadium: {team.stadium || "Missing information"}</p>
            <p>Established: {team.established || "Missing information"}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Country Details</h2>
            <p>Name: {team.country?.name || "Missing information"}</p>
            <p>Code: {team.country?.code || "Missing information"}</p>
            <img
              src={team.country?.flag || "https://via.placeholder.com/150"}
              alt="Country flag"
              className="w-16 h-10 object-contain mt-2"
            />
          </div>
        </div>

        {/* Roster Placeholder */}
        <div className="border-t border-gray-400 pt-8">
          <h2 className="text-2xl font-semibold mb-4">Team Roster</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {playerData.map((player) => (
              <Link
                href={`/players/${player.id}`}
                key={player.id}
                className="bg-gray-900 p-4 rounded-lg border border-gray-700"
              >
                <img
                  src={player.image || "https://via.placeholder.com/150"}
                  alt={player.name}
                  className="w-24 h-24 object-cover rounded-full mx-auto"></img>
                <h3 className="text-lg font-semibold">{player.name}</h3>
                <p className="text-gray-400">{player.position}</p>
              </Link>
            ))}
          </div>
          <p className="text-gray-400"></p>
        </div>
      </div>
    </div>
  );
}
