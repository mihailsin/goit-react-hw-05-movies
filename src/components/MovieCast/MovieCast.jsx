import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getMovies from '../../services/theMovieDbApi';

const MovieCast = () => {
  const [movies, setMovies] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovies
      .getMovieCredits(movieId)
      .then(setMovies)
      .catch(error => console.log(error));
  }, [movieId]);
  console.log(movies);
  return (
    movies && (
      <div>
        <h2>Cast</h2>
        <ul>
          {movies.map((movie, idx) => {
            return (
              <li key={idx}>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${movie.profile_path}`}
                  alt=""
                />
                <p>Character: {movie.character}</p>
                <p>Name: {movie.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    )
  );
};

export default MovieCast;
