import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

const HomePage = lazy(() =>
  import('./pages/HomePage' /*webpackChunkName: "Home"*/)
);
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage' /*webpackChunkName: "Movies"*/)
);
const MovieDetails = lazy(() =>
  import('./components/MovieDetails' /*webpackChunkName: "MovieDetails"*/)
);
const Navigation = lazy(() =>
  import('./components/Navigation' /*webpackChunkName: "Nav"*/)
);
const MovieCast = lazy(() =>
  import('./components/MovieCast' /*webpackChunkName: "Cast"*/)
);
const MovieReviews = lazy(() =>
  import('./components/MovieReviews' /*webpackChunkName: "Reviews"*/)
);

function App() {
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
