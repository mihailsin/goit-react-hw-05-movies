import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import getMovies from '../../services/theMovieDbApi';

const MoviesSearch = () => {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const onSubmit = e => {
    e.preventDefault();

    setSearchParams({ query: e.target.searchInput.value });
    console.log('searchParams:', searchParams.get('query'));

    e.target.reset();
  };
  useEffect(() => {
    const queryString = searchParams.get('query');
    if (!queryString) return;
    getMovies
      .getMoviesOnQuery(queryString)
      .then(setMovies)
      .catch(error => console.log(error));
  }, [searchParams]);

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
