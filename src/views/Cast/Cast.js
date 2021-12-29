import { useState, useEffect } from "react";
import * as moviesAPI from "../../services/movies-api";
import styles from "./Cast.module.css";
import PropTypes from "prop-types";

export default function Cast({ movieId }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const getCast = async () => {
      const castCurr = await moviesAPI.fetchCastById(movieId);
      setCast(castCurr);
    };
    getCast();
  }, [movieId]);

  return (
    <div>
      <ul className={styles.cardSet}>
        {cast &&
          cast.cast.map(({ id, profile_path, original_name, character }) => (
            <li key={id} className={styles.cardItem}>
              <img
                className={styles.actor_img}
                src={
                  profile_path !== null
                    ? `https://image.tmdb.org/t/p/w300${profile_path}`
                    : "https://cdn.pixabay.com/photo/2021/07/04/20/10/owl-6387500_960_720.png"
                }
                alt={original_name}
              />
              <div>
                <p>{original_name}</p>
                <p>Character: {character}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};
