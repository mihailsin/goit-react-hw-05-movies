import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import getMovies from '../../services/theMovieDbApi';
import { Fragment } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getMovies
      .getTrending()
      .then(setMovies)
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <List sx={style}>
        {movies &&
          movies.map(({ title, id }) => {
            return (
              <Fragment key={id}>
                <ListItem button>
                  <Link
                    to={`/movies/${id}`}
                    style={{ textDecoration: 'none' }}
                    state={{ from: location.pathname }}
                  >
                    {title}
                  </Link>
                </ListItem>
                <Divider />
              </Fragment>
            );
          })}
      </List>
    </>
  );
};

export default TrendingMovies;
