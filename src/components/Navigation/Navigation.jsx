import { NavLink, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();

  const goBackwards = () => {
    navigate(-1);
  };
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <button type="button" onClick={goBackwards}>
        Go Back
      </button>
    </>
  );
};

export default Navigation;
