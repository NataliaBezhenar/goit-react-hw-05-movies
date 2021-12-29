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

export function fetchMoviesByQuery(query) {
  console.log("fetch Movies By Query; QUERY ---> ", query);
  return fetchMovies(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  );
}

export function fetchMovieById(movie_id) {
  console.log("fetchMovieById -->", movie_id);
  return fetchMovies(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${KEY}&language=en-US`
  );
}
