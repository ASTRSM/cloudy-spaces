/* eslint-disable max-len */

import {getRestaurantById} from '../../src/scripts/data/restaurant-API';
import FavoriteButtonInitiator from '../../src/scripts/utils/favorite-initiator';

const createFavoriteButtonPresenterWithRestaurant = async (id) => {
  const restaurant = await getRestaurantById(id);
  await FavoriteButtonInitiator.init(restaurant);
};

export {createFavoriteButtonPresenterWithRestaurant};
