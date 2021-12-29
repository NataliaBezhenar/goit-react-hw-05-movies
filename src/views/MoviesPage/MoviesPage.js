import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

import * as moviesAPI from "../../services/movies-api";
import PropTypes from "prop-types";

export default function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      alert("Please enter search query");
      return;
    }
    onSubmit(searchQuery);
  };

  function onSubmit(searchQuery) {
    console.log("searchQuery onSubmit func", searchQuery);
    navigate({ ...location, search: `query=${searchQuery}` });
    try {
      moviesAPI.fetchMoviesByQuery(searchQuery).then(setMovies);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(movies);

  const handleQueryChange = (e) => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
    if (e.currentTarget.value === "") {
      navigate({ ...location, search: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        autoComplete="off"
        autoFocus
        value={searchQuery}
        onChange={handleQueryChange}
      />
      <button>Search</button>
      {movies &&
        (movies.results.length === 0 ? (
          <h3>Nothing found on your query(((</h3>
        ) : (
          movies.results.map((res) => (
            <nav key={res.id}>
              <Link to={`/movies/${res.id}`}>{res.title}</Link>
            </nav>
          ))
        ))}
    </form>
  );
}

MoviesPage.propTypes = {
  onSubmit: PropTypes.func,
};
