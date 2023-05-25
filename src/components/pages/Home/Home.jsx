import { useState, useEffect } from "react";
import { fetchPopularFilms } from '../../fetch';
import  MovieList  from "components/MovieList/MovieList";
import Loader from "components/Loader/Loader";
import PropTypes from "prop-types";
const Home = () => {
  const [popularFilms, setPopularFilms] = useState([]);

  useEffect(() => {
    fetchPopularFilms()
      .then((popularFilms) => setPopularFilms(popularFilms))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  

  if (popularFilms.length === 0) {
    return <Loader />;
  }
  
  return (
    <main>
      <h1>Trending today</h1>
      <MovieList movies={popularFilms} />
    </main>
  );
};
Home.propTypes = {
  children: PropTypes.node,
};

 export default Home;