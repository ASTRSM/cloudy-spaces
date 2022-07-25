const CONFIG = require('./config');

const API_ENDPOINT = {
  RESTAURANT_LIST: `${CONFIG.BASE_URL}list`,
  RESTAURANT_DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  RESTAURANT_SEARCH: (query) =>
    `${CONFIG.BASE_URL}search?q=${query}`,
  RESTAURANT_RATING: `${CONFIG.BASE_URL}review`,
};

module.exports = API_ENDPOINT;
