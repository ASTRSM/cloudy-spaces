/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
const API_ENDPOINT = require('../globals/api-endpoint');

class RestaurantAPI {
  static async getRestaurants() {
    const response = await fetch(`${API_ENDPOINT.RESTAURANT_LIST}`);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getRestaurantById(id) {
    const response = await fetch(`${API_ENDPOINT.RESTAURANT_DETAIL(id)}`);
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async searchRestaurant(query) {
    const response = await fetch(`${API_ENDPOINT.RESTAURANT_SEARCH(query)}`);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async addReview(id, name, review) {
    const response = await fetch(`${API_ENDPOINT.RESTAURANT_RATING}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        name,
        review,
      }),
    });
    return response.json();
  }
}

module.exports = RestaurantAPI;
