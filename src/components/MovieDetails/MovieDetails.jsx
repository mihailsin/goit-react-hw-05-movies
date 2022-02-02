import getMovies from '../../services/theMovieDbApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  console.log(movieId);
  console.log(movie);
  useEffect(() => {
    getMovies
      .getDetailed(movieId)
      .then(setMovie)
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    movie && (
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
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
