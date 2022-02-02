import getMovies from '../../services/theMovieDbApi';
import MovieCast from '../MovieCast';
import MovieReviews from '../MovieReviews';
import { useState, useEffect } from 'react';
import { useParams, Route, Routes, NavLink } from 'react-router-dom';
const MovieDetails = () => {
  const [movie, setMovie] = useState({});
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
          {/* <p>{movie.genres}</p> */}
        </div>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
        <Routes>
          <Route path="/cast" element={<MovieCast />} />
          <Route path="/reviews" element={<MovieReviews />} />
        </Routes>
      </>
    )
  );
};

export default MovieDetails;
