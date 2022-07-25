import FavoriteRestaurantIdb from '../data/favoriteRestaurant-idb';
import {
  addToFavoriteTemplate,
  removeFromFavoriteTemplate,
} from '../views/templates/template-creator';

const FavoriteButtonInitiator = {
  async init(restaurant) {
    if (restaurant === undefined) {
      return;
    }
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const {id} = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderFavorited();
    } else {
      this._renderFavorite();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderFavorite() {
    addToFavoriteTemplate();

    $('.favorites').on('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderFavorited() {
    removeFromFavoriteTemplate();

    $('.favorites').on('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default FavoriteButtonInitiator;
