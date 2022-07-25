/* eslint-disable max-len */
const {
  BASE_IMAGE_URL_MEDIUM,
  BASE_IMAGE_URL_LARGE,
} = require('../../globals/config');
const {default: getAllComments} = require('../../utils/comment-list-initiator');
const {getCategories, getMenus} = require('../../utils/menus');

/* eslint-disable require-jsdoc */
class TemplateCreator {
  static renderRestaurants(restaurants) {
    restaurants.forEach((restaurant) => {
      const ratingBar = (restaurant.rating / 5) * 100;
      const rating = `
      style='background-size : ${ratingBar}% 100%;
      background-image: linear-gradient(400deg, #ffb361, #b6e3ef, #ff7d7d);
      background-repeat: no-repeat;'
      `;

      $('.partners-container').append(`
      <article id='${restaurant.id}' class='partner-card' tabindex='0'>
        <img class='partner-card__img lazyload' alt="Restaurant\'s interior/exterior"
        data-src="${BASE_IMAGE_URL_MEDIUM}${restaurant.pictureId}" height="200" width="300">
        <h4 class='partner-card__title'>${restaurant.name}</h4>
        <p class='partner-card__description'>
            ${restaurant.description}
        </p>
        <p class="partner-card__city">${restaurant.city}</p>
        <div class="partner-card__rating-container">
            <p>Rating</p>
            <div class='partner-card__rating-case'>
                <div class='partner-card__rating' ${rating}>
                    <p>${restaurant.rating}</p>
                </div>
            </div>
        </div>
      </article>
      `);
    });
  }

  static renderDetails(detail) {
    const image = `${BASE_IMAGE_URL_LARGE}${detail.pictureId}`;
    $('#popup').html(`
    <article class="detail">
        <div>
          <h1>${detail.name}</h1>
          <div class="flex-container">
            <img class="detail_img" src="${image}" alt="Restaurant\'s interior/exterior">
            <div class="side">
              <div class="restaurant-desc">
                <h2>Details</h2>
                <p>${detail.description}</p>
                <p><b>City</b> :  ${detail.city}</p>
                <p><b>Address</b> :  ${detail.address}</p>
                <p><b>Categories</b> :  ${getCategories(detail.categories)}</p>
                <h3>MENU</h3>
                <div class="menu-container">
                  <div class='foods-container'>
                    <h4>Foods</h4>
                    <ul class='menu-list'>
                      ${getMenus(detail.menus.foods)}
                    </ul>
                  </div>
                  <div class='drinks-container'>
                    <h4>Drinks</h4>
                    <ul class='menu-list'>
                      ${getMenus(detail.menus.drinks)}
                    </ul>
                  </div>
                </div>
              <div class="rating">
                    <h1>${detail.rating}</h1>
                    <p>Rating</p>
                    <div class="favorite-container"></div>
              </div>
              <div class='comments'>
                <form class='comment-form'>
                  <input type="text" class='comment-name' 
                  placeholder="Your Name Here...">
                  <textarea class='comment-text' 
                  rows="4" placeholder='Write a comment...'></textarea>
                  <button class='send-comment'>Send</button>
                </form>
                <div class='comments-list'>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
    </article>`);
    getAllComments(detail.customerReviews);
  }

  static addToFavoriteTemplate() {
    $('.favorite-container').html(`
    <button class='favorites add-favorites'>Add to Favorites</button>
    `);
  }

  static removeFromFavoriteTemplate() {
    $('.favorite-container').html(`
    <button class='favorites remove-favorites'>Remove to Favorites</button>
    `);
  }

  static _getEmptyRestaurantTemplate() {
    $('.partners-container').html(`
    <div class="restaurant__not__found">Tidak ada restaurant untuk ditampilkan</div>
    `);
  }
}

module.exports = TemplateCreator;
