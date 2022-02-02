import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import getMovies from '../../services/theMovieDbApi';
const MoviesSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const handleInput = e => {
    console.log(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    console.log(e.target.searchInput.value);
    setSearchQuery(e.target.searchInput.value);
  };
  useEffect(() => {
    getMovies
      .getMoviesOnQuery(searchQuery)
      .then(setMovies)
      .catch(error => console.log(error));
  }, [searchQuery]);

  return (
    <>
      <form onSubmit={onSubmit} onInput={handleInput}>
        <input type="text" name="searchInput" />
        <button type="submit">Search</button>
      </form>
      {movies.length > 0 && (
        <ul>
          {movies.map((movie, idx) => {
            return (
              <li key={idx}>
                <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default MoviesSearch;
