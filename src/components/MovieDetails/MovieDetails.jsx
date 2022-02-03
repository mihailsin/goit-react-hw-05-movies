import getMovies from '../../services/theMovieDbApi';
import { useState, useEffect } from 'react';
import { useParams, Outlet, NavLink } from 'react-router-dom';
const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovies
      .getDetailed(movieId)
      .then(setMovie)
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    movie && (
      <>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={`Poster of ${movie.name}`}
          />
          <h2>{movie.name}</h2>
          <p>{movie.overview}</p>
          <p>
            {movie.genres.map((genre, idx) => (
              <span key={idx}>{genre.name} </span>
            ))}
          </p>
        </div>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
        <Outlet />
      </>
    )
  );
};

export default MovieDetails;
