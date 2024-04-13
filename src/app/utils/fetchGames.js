export async function fetchGames() { 
    const response = await fetch('https://v1.american-football.api-sports.io/games?season=2023&league=1', {
    method: 'GET',
    headers: {
      'x-rapidapi-key': process.env.API_KEY,
      'x-rapidapi-host': 'v1.american-football.api-sports.io',
    },
  });
  console.log(response)

  if (!response.ok) {
    throw new Error('Failed to fetch game');
  }

  const data = await response.json();
  console.log(data)
  if (data.response == []) {
    throw new Error(data.errors[0].message);
  }
  return data.response;
}
