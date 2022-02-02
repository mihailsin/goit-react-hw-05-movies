import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import getMovies from '../../services/theMovieDbApi';
const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies
      .getTrending()
      .then(setMovies)
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {movies &&
          movies.map(({ title, id }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`}>{title}</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default TrendingMovies;
