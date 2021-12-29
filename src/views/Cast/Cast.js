import { useState, useEffect } from "react";
import * as moviesAPI from "../../services/movies-api";

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
      <ul>
        {cast &&
          cast.cast.map(({ id, profile_path, original_name, character }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w300${profile_path}`}
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
