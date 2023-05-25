import React, { useState, startTransition } from "react";
import { fetchMovies } from "../../fetch";
import MovieList from "components/MovieList/MovieList";
import css from "./style.module.css";
import Loader from "components/Loader/Loader";
import PropTypes from "prop-types";
const Movies = () => {
  const [filmName, setFilmName] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChangeSearch = (evt) => {
    setFilmName(evt.currentTarget.value.toLowerCase());
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    if (filmName.trim() === "") {
      return;
    }

    startTransition(() => {
      setIsLoading(true);
      setMovies([]);
      setError(null);

      fetchMovies(filmName)
        .then((movies) => {
          setMovies(movies);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
        });
    });
  };

  return (
    <header>
      <form className={css.form} onSubmit={handleOnSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          value={filmName}
          onChange={handleChangeSearch}
          className={css.input}
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
      {isLoading ? (
        <Loader/>
      ) : error ? (
        <p>Failed to fetch movies. Please try again later.</p>
      ) : (
        <MovieList movies={movies} />
      )}
    </header>
  );
};
Movies.propTypes = {
  children: PropTypes.node,
};
export default Movies;
