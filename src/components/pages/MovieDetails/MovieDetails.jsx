import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchById } from '../../fetch';
import { Link, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchById(id)
      .then((movie) => {
        setMovie(movie);
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>User score: {movie.vote_average}</p>
      <p>Genres: {movie.genres.map((gen=>(`${gen.name} `)))}</p>
      <p>{movie.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
      <h3>Additional information</h3>
      <ul>
        <li>
        <Link to="cast">Cast</Link>
        </li>
        <li>
        <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
MovieDetails.propTypes = {
  children: PropTypes.node,
};
export default MovieDetails;