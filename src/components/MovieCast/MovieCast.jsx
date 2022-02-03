import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getMovies from '../../services/theMovieDbApi';

const MovieCast = () => {
  const [movies, setMovies] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovies
      .getMovieCredits(movieId)
      .then(setMovies)
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    movies.length > 0 && (
      <div>
        <h2>Cast</h2>
        <ul>
          {movies.map(({ profile_path, character, name }, idx) => {
            return (
              <li key={idx}>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${profile_path}`}
                  alt={`${name} who played ${character}`}
                />
                <p>Character: {character}</p>
                <p>Name: {name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    )
  );
};

export default MovieCast;
