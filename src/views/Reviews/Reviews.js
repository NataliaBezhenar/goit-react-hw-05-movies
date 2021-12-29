import { useState, useEffect } from "react";
import * as moviesAPI from "../../services/movies-api";

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      const movieReviews = await moviesAPI.fetchReviewsByMovieId(movieId);
      setReviews(movieReviews);
    };
    getReviews();
  }, [movieId]);

  return (
    <div>
      <ul>
        {reviews && reviews.results.length > 0 ? (
          reviews.results.map(({ author, content, id }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <h1>No reviews yet</h1>
        )}
      </ul>
    </div>
  );
}
