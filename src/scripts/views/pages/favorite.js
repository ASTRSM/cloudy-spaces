import FavoriteRestaurantIdb from '../../data/favoriteRestaurant-idb';
const TemplateCreator = require('../templates/template-creator');

const Favorites = {
  async render() {
    return `
    <hero-element></hero-element>
    <section class="partners">  
      <h3>Your Favorites Partners</h3>
      <div class="partners-container">
      </div>
    </section> 
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    if (restaurants.length == 0) {
      TemplateCreator._getEmptyRestaurantTemplate();
      return;
    }
    TemplateCreator.renderRestaurants(restaurants);
  },
};

export default Favorites;
