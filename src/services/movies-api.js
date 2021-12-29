const KEY = "b9d2ccfba053388d99257796fc44f0a4";

async function fetchMovies(url = "") {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function fetchTrendingMovies() {
  console.log("fetch Trending Movies ===>>>");
  return fetchMovies(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`
  );
}
