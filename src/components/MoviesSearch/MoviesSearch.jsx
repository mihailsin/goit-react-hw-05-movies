import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import getMovies from '../../services/theMovieDbApi';
const queryString = require('query-string');
const MoviesSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = queryString.parse(location.search);
  const queryValue = Object.values(queryParams).toString();

  console.log(queryValue);
  console.log(navigate);

  const onSubmit = e => {
    e.preventDefault();

    setSearchQuery(e.target.searchInput.value);
    navigate(`/movies?query=${e.target.searchInput.value}`);

    e.target.reset();
  };
  useEffect(() => {
    if (!queryValue) return;
    getMovies
      .getMoviesOnQuery(queryValue)
      .then(setMovies)
      .catch(error => console.log(error));
  }, [queryValue, searchQuery]);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" name="searchInput" />
        <button type="submit">Search</button>
      </form>
      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, original_title }, idx) => {
            return (
              <li key={idx}>
                <Link to={`/movies/${id}`}>{original_title}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default MoviesSearch;
