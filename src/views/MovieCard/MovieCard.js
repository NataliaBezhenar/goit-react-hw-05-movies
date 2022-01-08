import {
  Route,
  Routes,
  useParams,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import styles from "./MovieCard.module.css";
import navStyles from "../../components/Navigation/Navigation.module.css";
import * as moviesAPI from "../../services/movies-api";
const Cast = lazy(() => import("../Cast/Cast.js"));
const Reviews = lazy(() => import("../Reviews/Reviews.js"));

export default function MovieCard() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const getMovie = async () => {
      const currentMovie = await moviesAPI.fetchMovieById(movieId);
      setMovie(currentMovie);
    };
    getMovie();
  }, [movieId]);

  const goBack = () => {
    console.log("back btn click");
    if (location.pathname === `/movies/${movieId}`) {
      navigate(-1);
    }
    if (
      location.pathname === `/movies/${movieId}/cast` ||
      location.pathname === `/movies/${movieId}/reviews`
    ) {
      navigate(-2);
    }
  };

  return (
    <div>
      {movie && (
        <div>
          <button type="button" onClick={goBack}>
            Go Back
          </button>
          <div className={styles.shortInfo}>
            <div>
              <img
                src={
                  movie.poster_path !== null
                    ? `https://image.tmdb.org/t/p/w400${movie.poster_path}`
                    : "https://cdn.pixabay.com/photo/2016/11/03/14/18/stamp-1794352_960_720.png"
                }
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
            <ul className={styles.additionalInfoSet}>
              <li>
                <NavLink
                  to={{ pathname: "cast" }}
                  className={(navData) =>
                    navData.isActive ? navStyles.activeLink : navStyles.link
                  }
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{ pathname: "reviews" }}
                  className={(navData) =>
                    navData.isActive ? navStyles.activeLink : navStyles.link
                  }
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
            <Suspense fallback={<h1>Loading.....................</h1>}>
              <Routes>
                <Route path="cast" element={<Cast movieId={movieId} />} />
                <Route path="reviews" element={<Reviews movieId={movieId} />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      )}
      <hr />
    </div>
  );
}
