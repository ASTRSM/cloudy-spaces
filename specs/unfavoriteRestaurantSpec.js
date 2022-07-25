/* eslint-disable max-len */
import FavoriteRestaurantIdb from '../src/scripts/data/favoriteRestaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('uUnliking a restaurant', () => {
  const id = 'rqdv5juczeskfw1e867';
  const addToFavoriteTemplate = () => {
    document.body.innerHTML = `<div class="favorite-container"></div>`;
  };

  beforeEach(async () => {
    FavoriteRestaurantIdb.deleteRestaurant(id);
    addToFavoriteTemplate();
    await FavoriteRestaurantIdb.putRestaurant({id: id});
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant(id);

    expect(document.querySelector('.remove-favorites')).toBeTruthy();
  });

  it('should not show the like button when the Restaurant has not been liked before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant(id);

    expect(
        document.querySelector('.add-favorites'),
    ).toBeFalsy();
  });

  it('should be able to remove liked Restaurant from the list', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant(id);
    document.querySelector('.remove-favorites').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unliked Restaurant is not in the list', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant(id);

    // hapus dulu Restaurant dari daftar Restaurant yang disukai
    await FavoriteRestaurantIdb.deleteRestaurant(id);

    // kemudian, simulasikan pengguna menekan widget batal menyukai Restaurant
    document.querySelector('.remove-favorites').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
