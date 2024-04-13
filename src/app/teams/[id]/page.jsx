import fetchTeamById from "../../utils/fetchTeamById";

export default async function page(params) {
  const id = params.params.id;
  const teamData = await fetchTeamById(id);
  const team = teamData[0];
  console.log(team[0]);
  return (
    <div className="bg-gray-800 min-h-screen text-white p-8 pt-20">
      <div className="max-w-4xl mx-auto">
        {/* Team Header */}
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

        {/* Team Info Grid */}
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
          {/* Placeholder for roster list. */}
          <p className="text-gray-400">
            Roster information will be displayed here.
          </p>
        </div>
      </div>
    </div>
  );
}
