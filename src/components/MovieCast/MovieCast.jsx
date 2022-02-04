import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getMovies from '../../services/theMovieDbApi';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

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
        <ul
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gridGap: 16,
            marginTop: 0,
            marginBottom: 0,
            padding: 0,
            listStyle: 'none',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          {movies.map(({ profile_path, character, name }, idx) => {
            if (profile_path)
              return (
                <li key={idx}>
                  <Card sx={{ maxWidth: 300 }}>
                    <CardMedia
                      component="img"
                      src={`https://image.tmdb.org/t/p/w300/${profile_path}`}
                      alt={`${name} who played ${character}`}
                    />
                    <CardContent>
                      <p>Name: {name}</p>
                      <p>Character: {character}</p>
                    </CardContent>
                  </Card>
                </li>
              );
            else
              return (
                <li key={idx}>
                  <Card sx={{ maxWidth: 300 }}>
                    <CardMedia
                      component="img"
                      src={`https://via.placeholder.com/280x420.png?text=Image+Not+Available`}
                      alt={`${name} who played ${character}`}
                    />
                    <CardContent>
                      <p>Character: {character}</p>
                      <p>Name: {name}</p>
                    </CardContent>
                  </Card>
                </li>
              );
          })}
        </ul>
      </div>
    )
  );
};

export default MovieCast;
