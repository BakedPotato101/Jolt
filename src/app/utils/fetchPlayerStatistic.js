fetch("https://v1.american-football.api-sports.io/games/statistics/players?id=1985", {
    method: "GET",
    headers: {
        "x-rapidapi-host": "v1.american-football.api-sports.io",
        "x-rapidapi-key":  process.env.API_KEY,
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error('Failed to fetch teams');
    }
    return response.json();
})
.then(data => {
    if (data.response.length === 0) {
        throw new Error(data.errors[0].message);
    }
    console.log(data.response);
})
.catch(err => {
    console.log(err);
});
