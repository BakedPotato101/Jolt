import fetchGamesById from "../../utils/fetchGamesById";

export default async function page(params) {
  const id = params.params.id;
  const gameData = await fetchGamesById(id);
  return (
    <div className="pt-20">
      <p>{JSON.stringify(gameData)}</p>
    </div>
  );
}
