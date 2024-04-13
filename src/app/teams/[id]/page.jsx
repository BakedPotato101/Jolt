import fetchTeamById from '../../utils/fetchTeamById'

export default async function page( params ) {
    const id = params.params.id;
    const teamData = await fetchTeamById(id);
    return (
        <div className="pt-20">
            <p>{JSON.stringify(teamData)}</p>
        </div>
    );
}