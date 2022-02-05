import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from './navigation.module.css';
import Button from '@mui/material/Button';

const Navigation = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log(pathname);
  const goBackwards = () => {
    navigate(-1);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <nav>
                  {pathname !== '/' && pathname !== '/movies' && (
                    <Button
                      type="button"
                      variant="contained"
                      size="small"
                      color="success"
                      onClick={goBackwards}
                    >
                      Go Back
                    </Button>
                  )}
                  <NavLink
                    className={link =>
                      link.isActive ? styles.active : styles.link
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    className={link =>
                      link.isActive ? styles.active : styles.link
                    }
                    to="/movies"
                  >
                    Movies
                  </NavLink>
                </nav>
              </Grid>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navigation;
