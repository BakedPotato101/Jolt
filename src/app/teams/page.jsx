import { fetchTeams } from "../utils/fetchTeams";
import Link from 'next/link'; 

export default async function Page() {
  const teams = await fetchTeams();
  console.log("fetched teams", teams);

  return (
    <div className="pt-20 space-y-4">
      <h1 className="text-3xl font-bold text-center mb-10">Teams</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        {teams.map((team) => (
          <Link
            className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100"
            href={`/teams/${team.id}`}
            key={team.id}
          >
            <img
              src={team.logo}
              alt={team.name}
              className="mx-auto h-20 w-20"
            />
            <h5 className="mt-4 text-2xl font-bold tracking-tight text-gray-900">
              {team.name}
            </h5>
          </Link>
        ))}
      </div>
    </div>
  );
}
