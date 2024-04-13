export default async function fetchPlayersByTeam(team) {
    const response = await fetch('https://v1.american-football.api-sports.io/players?season=2023&team=' + team, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': process.env.API_KEY,
        'x-rapidapi-host': 'v1.american-football.api-sports.io',
      },
    });
    console.log(response)
 
    if (!response.ok) {
      throw new Error('Failed to fetch players');
    }
 
    const data = await response.json();
    console.log(data);
    if (data.response == []) {
      throw new Error(data.errors[0].message);
    }
    return data.response;
  }
