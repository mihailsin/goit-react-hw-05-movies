import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetails from './components/MovieDetails';
function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="movies/:movieId/*" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
