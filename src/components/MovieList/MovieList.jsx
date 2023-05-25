import { Link } from "react-router-dom";
import style from './style.module.css'
const MovieList = ({ movies }) => {
  return (
    <div className={style.container}>
      {movies.map((movie) => (
        <div key={movie.id}  id={movie.id} className={style.card}>
          <Link to={`/movies/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            <p>{movie.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default MovieList;