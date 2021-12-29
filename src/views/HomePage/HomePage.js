import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as moviesAPI from "../../services/movies-api";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const [movies, setMovies] = useState(null);

  try {
    useEffect(() => {
      moviesAPI.fetchTrendingMovies().then(setMovies);
    }, []);
  } catch (error) {
    console.log(error);
  }

  return (
    <div>
      <h1>Trending today</h1>
      {movies &&
        movies.results.map((res) => (
          <nav className={styles.nav} key={res.id}>
            <Link to={`/movies/${res.id}`}>{res.title}</Link>
          </nav>
        ))}
      <hr />
    </div>
  );
}
