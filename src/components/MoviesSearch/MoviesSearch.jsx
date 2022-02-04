import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { Fragment } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import getMovies from '../../services/theMovieDbApi';

const formStyle = {
  marginTop: 30,
};

const buttonStyle = {
  marginLeft: 20,
};

const MoviesSearch = () => {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const onSubmit = e => {
    e.preventDefault();

    setSearchParams({ query: e.target.searchInput.value });

    e.target.reset();
  };
  useEffect(() => {
    const queryString = searchParams.get('query');
    if (!queryString) return;
    getMovies
      .getMoviesOnQuery(queryString)
      .then(setMovies)
      .catch(error => console.log(error));
  }, [searchParams]);

  return (
    <>
      <form onSubmit={onSubmit} style={formStyle}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          {' '}
          <TextField
            id="outlined-basic"
            label="Movie"
            defaultValue=""
            type="text"
            name="searchInput"
            autoComplete="off"
          />
          <Button type="submit" size="large" style={buttonStyle}>
            Search
          </Button>
        </Grid>
      </form>
      {movies.length > 0 && (
        <List>
          {movies.map(({ id, original_title }, idx) => {
            return (
              <Fragment key={idx}>
                <ListItem button>
                  <Link to={`/movies/${id}`} style={{ textDecoration: 'none' }}>
                    {original_title}
                  </Link>
                </ListItem>
                <Divider />
              </Fragment>
            );
          })}
        </List>
      )}
    </>
  );
};

export default MoviesSearch;
