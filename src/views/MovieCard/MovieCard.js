import { NavLink, useParams } from "react-router-dom";
import * as moviesAPI from "../../services/movies-api";
import { useState, useEffect } from "react";
import styles from "./MovieCard.module.css";

export default function MovieCard() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const currentMovie = await moviesAPI.fetchMovieById(movieId);

      setMovie(currentMovie);
    };

    getMovie();
  }, [movieId]);

  // moviesAPI.fetchMovieById(movieId).then(console.log);
  console.log(movie);
  return (
    <div>
      {movie && (
        <div>
          <div className={styles.shortInfo}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <div className={styles.shortInfoChild}>
              <h2>
                {movie.title} ({movie.release_date.slice(0, 4)})
              </h2>
              <p>User score: {movie.vote_average}</p>
              <h3>Overveiw</h3>
              <p>{movie.overview ? movie.overview : "No overwies yet"}</p>
              <h3>Genres</h3>
              <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
            </div>
          </div>
          <div>
            <h3>Additional Information</h3>
            <ul>
              <li>
                <NavLink to="">Cast</NavLink>
              </li>
              <li>
                <NavLink to="">Reviews</NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
