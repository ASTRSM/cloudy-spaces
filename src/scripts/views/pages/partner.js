const RestaurantAPI = require('../../data/restaurant-API');
const TemplateCreator = require('../templates/template-creator');

const partners = {
  async render() {
    return `
    <hero-element></hero-element>
    <section class="partners">  
      <h3>Our Partners</h3>
      <div class="partners-container">
      </div>
    </section>   
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantAPI.getRestaurants();
    TemplateCreator.renderRestaurants(restaurants);
  },
};

module.exports = partners;
