import getMovies from '../../services/theMovieDbApi';
import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, NavLink, useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from '../Navigation/navigation.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const [prevLocationStateObj, setPrevLocationStateObj] = useState(null);
  useEffect(() => {
    setPrevLocationStateObj(location.state);
    getMovies
      .getDetailed(movieId)
      .then(setMovie)
      .catch(error => console.log(error));
  }, [location.state, movieId]);

  return (
    movie && (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <img
              style={{ display: 'block' }}
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt={`Poster of ${movie.name}`}
            />
          </Grid>
          <Grid item md={8}>
            <h2>{movie.name}</h2>
            <p>{movie.overview}</p>
            <p>
              Genre:
              {movie.genres.map((genre, idx) => (
                <span key={idx}> {genre.name} </span>
              ))}
            </p>
          </Grid>
        </Grid>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <NavLink
                  className={link =>
                    link.isActive ? styles.active : styles.link
                  }
                  to="cast"
                  state={prevLocationStateObj}
                >
                  Cast
                </NavLink>
                <NavLink
                  className={link =>
                    link.isActive ? styles.active : styles.link
                  }
                  to="reviews"
                  state={prevLocationStateObj}
                >
                  Reviews
                </NavLink>
              </Grid>
            </Typography>
          </Toolbar>
        </AppBar>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </Box>
    )
  );
};

export default MovieDetails;
