const axios = require('axios');
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '6fcd47491cc2d89a885f0d4d16c2434f';

const getMovies = {
  async getTrending() {
    const response = await axios.get(`trending/movie/day?api_key=${KEY}`);
    const data = response.data.results;
    console.log(data);
    return data;
  },
  async getDetailed() {
    const response = await axios.get(
      `/movie/862491?api_key=${KEY}&language=en-US`
    );
    console.log(response.data);
    return response.data;
  },
};

export default getMovies;
