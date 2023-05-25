import { fetchCast } from "components/fetch";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import style from './cast.module.css'
import Loader from "components/Loader/Loader";

const Cast = () => {
  const { id } = useParams();

  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchCast(id)
      .then((cast) => {
        setCast(cast);
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (!cast) {
    return <Loader/>;
  }
  return(
    <div className={style.container}>
      {cast.map((name) => (
        <div key={name.id} className={style.card}>
          {name.profile_path ?
            <img src={`https://image.tmdb.org/t/p/w200${name.profile_path}`} alt={name.name} /> :
            <b>Out of Photo</b>
          }
          <b className={style.title}>Aktor name: {name.name}</b>
          {name.character ? <p> Charakter name: {name.character}</p> : false}
          <p>Popularity: {name.popularity}</p>
        </div>
      ))}
    </div>
  )
}

Cast.propTypes = {
  id: PropTypes.string,
};

export default Cast;
