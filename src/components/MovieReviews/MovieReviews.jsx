import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getMovies from '../../services/theMovieDbApi';

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getMovies
      .getMovieReviews(movieId)
      .then(setReviews)
      .catch(error => console.log(error));
  }, [movieId]);
  return (
    <div>
      {reviews.length > 0 && (
        <ul>
          {reviews.map((review, idx) => {
            return (
              <li key={idx}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
      {reviews.length === 0 && <h1>Nobody left a review on this movie yet</h1>}
    </div>
  );
};

export default MovieReviews;
