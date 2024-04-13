export default async function fetchPlayerStatisticById(id) {
  const response = await fetch('https://v1.american-football.api-sports.io/players/statistics?season=2023&id=' + id, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': process.env.API_KEY,
      'x-rapidapi-host': 'v1.american-football.api-sports.io',
    },
  });
  console.log(response)

  if (!response.ok) {
    throw new Error('Failed to fetch teams');
  }

  const data = await response.json();
  if (data.response == []) {
    throw new Error(data.errors[0].message);
  }
  console.log(data);
  return data.response;
}
