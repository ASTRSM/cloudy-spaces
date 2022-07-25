import UrlParser from '../../routes/url-parser';

const RestaurantAPI = require('../../data/restaurant-API');
const {
  default: FavoriteButtonInitiator,
} = require('../../utils/favorite-initiator');
const TemplateCreator = require('../templates/template-creator');

const details = {
  async render() {
    return `
    <section id="popup"></section> 
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await RestaurantAPI.getRestaurantById(url.id);
    TemplateCreator.renderDetails(detail);
    FavoriteButtonInitiator.init(detail);

    $('.send-comment').on('click', () => {
      const name = $('.comment-name').val();
      const review = $('.comment-text').val();
      (async () => {
        await RestaurantAPI.addReview(url.id, name, review);
      })();
    });
  },
};

export default details;
