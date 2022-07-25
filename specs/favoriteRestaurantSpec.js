/* eslint-disable max-len */
import FavoriteRestaurantIdb from '../src/scripts/data/favoriteRestaurant-idb';
import * as TestFactories from './helpers/testFactories';


describe('liking a restaurant', () => {
  const id = 'rqdv5juczeskfw1e867';

  const addToFavoriteTemplate = () => {
    document.body.innerHTML = `<div class="favorite-container"></div>`;
  };

  beforeEach(() => {
    FavoriteRestaurantIdb.deleteRestaurant(id);
    addToFavoriteTemplate();
  });

  it('should show the favorite button when the restaurant has not been favorited before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant(id);

    expect(
        document.querySelector('.add-favorites'),
    ).toBeTruthy();
  });

  it('should not show the unlike button when the Restaurant has not been liked before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant(id);

    expect(
        document.querySelector('.remove-favorites'),
    ).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant(id);

    document.querySelector('.favorites').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    expect(restaurant.id).toEqual(id);
  });

  it('should not add a Restaurant again when its already liked', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant(id);

    await FavoriteRestaurantIdb.putRestaurant({id: id});
    document.querySelector('.favorites').dispatchEvent(new Event('click'));
    expect(await (await FavoriteRestaurantIdb.getAllRestaurants()).length).toEqual(1);
  });

  it('should not add a Restaurant when it has no id', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant();

    $('.favorite-container').html(`<button class='favorites'>Add to Favorites</button>`);
    document.querySelector('.favorites').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
