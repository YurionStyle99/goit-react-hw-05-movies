import axios from 'axios';
const searchPopularFilms = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export async function fetchPopularFilms() {
  const params = {
    api_key: '58645e23389326a2e8ed75695b9e1b79',
    media_type: 'movie',
    time_window: 'day',
  };

  try {
    const response = await searchPopularFilms.get('/trending/movie/day', { params });
    const popularFilms = response.data.results;
    return popularFilms;
  } catch (error) {
    console.log(error);
    throw error;
  }
}


export async function fetchBySearch(query) {
  const params = {
    api_key: '58645e23389326a2e8ed75695b9e1b79',
    query: query,
  };

  try {
    const response = await axios.get('https://api.themoviedb.org/3/search/movie', { params });
    const searchResults = response.data.results;
    return searchResults;
  } catch (error) {
    console.log(error);
  }
}
export async function fetchById(filmId) {
  const params = {
    api_key: '58645e23389326a2e8ed75695b9e1b79',
  };

  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${filmId}`, { params });
    const film = response.data;
    return film;
  } catch (error) {
    throw error;
  }
}
export async function fetchCast(filmId) {
  const params = {
    api_key: '58645e23389326a2e8ed75695b9e1b79',
  };

  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${filmId}/credits`, { params });
    const cast = response.data.cast;
    return cast;
  } catch (error) {
    throw error;
  }
}

export async function fetchReviews(filmId) {
  const params = {
    api_key: '58645e23389326a2e8ed75695b9e1b79',
  };

  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${filmId}/reviews`, { params });
    const reviews = response.data.results;
    return reviews;
  } catch (error) {
    throw error;
  }
}
export async function fetchMovies(value) {
  const params = {
    api_key: '58645e23389326a2e8ed75695b9e1b79',
    query: value,
  };

  try {
    const response = await axios.get('https://api.themoviedb.org/3/search/movie', { params });
    const movies = response.data.results;
    return movies;
  } catch (error) {
    throw error;
  }
}
