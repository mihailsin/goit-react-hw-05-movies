import getMovies from '../../services/theMovieDbApi';
import { useState, useEffect } from 'react';
const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  console.log(movie);
  useEffect(() => {
    getMovies
      .getDetailed()
      .then(setMovie)
      .catch(error => console.log(error));
  }, []);

  return (
    movie && (
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
          alt={`Poster of ${movie.name}`}
        />
        <h2>{movie.name}</h2>
        <p>{movie.overview}</p>
        {/* <p>{movie.genres}</p> */}
      </div>
    )
  );
};
export default MovieDetails;
