const axios = require('axios');
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '6fcd47491cc2d89a885f0d4d16c2434f';

const getMovies = {
  async getTrending() {
    const response = await axios.get(`trending/movie/day?api_key=${KEY}`);
    const data = response.data.results;

    return data;
  },

  async getDetailed(id) {
    const response = await axios.get(
      `/movie/${id}?api_key=${KEY}&language=en-US`
    );

    return response.data;
  },

  async getMovieCredits(id) {
    const response = await axios.get(
      `movie/${id}/credits?api_key=${KEY}&language=en-US`
    );

    return response.data.cast;
  },

  async getMovieReviews(id) {
    const response = await axios.get(
      `movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
    );

    return response.data.results;
  },

  async getMoviesOnQuery(searchTerm) {
    const response = await axios.get(
      `/search/movie?api_key=${KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`
    );

    return response.data.results;
  },
};

export default getMovies;
