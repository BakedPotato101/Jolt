export async function fetchGameById(id) {
    const response = await fetch('https://v1.american-football.api-sports.io/games?id=' + id, {
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
    if (data.response == []) {
      throw new Error(data.errors[0].message);
    }
    return data.response;
  }