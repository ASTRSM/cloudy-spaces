/* eslint-disable new-cap */
const assert = require('assert');

Feature('Favorite Restaurant');

Before(({I}) => {
  I.amOnPage('/#/favorite');
});

Scenario('liking one restaurant', async ({I}) => {
  I.waitForElement('.restaurant__not__found', 5);
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant__not__found');

  I.amOnPage('/');

  I.seeElement('.partner-card__title');

  const firstRestaurant = locate('.partner-card__title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('.add-favorites');
  I.click('.add-favorites');

  I.amOnPage('/#/favorite');
  I.seeElement('.partner-card');
  const likedRestaurantTitle = await I.grabTextFrom('.partner-card__title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', ({I}) => {
  I.waitForElement('.restaurant__not__found', 5);
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant__not__found');

  I.amOnPage('/');

  I.seeElement('.partner-card');
  I.click('.partner-card');

  I.seeElement('.add-favorites');
  I.click('.add-favorites');

  I.amOnPage('/#/favorite');
  I.seeElement('.partner-card');
  I.click('.partner-card');

  I.seeElement('.remove-favorites');
  I.click('.remove-favorites');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('.partner-card');
});

Scenario('reviewing one restaurant', async ({I}) => {
  I.waitForElement('.restaurant__not__found', 5);
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant__not__found');

  I.amOnPage('/');

  I.seeElement('.partner-card');
  I.click('.partner-card:last-child');

  const commentInput = [Date.now(), Date.now()];
  I.fillField('.comment-name', commentInput[0]);
  I.fillField('.comment-text', commentInput[1]);
  I.click('.send-comment');

  const lastComment = await I.grabNumberOfVisibleElements('.comment-item') + 1;
  I.refreshPage();
  I.refreshPage();
  I.waitForElement(`.comment-item:nth-child(${lastComment})`);
  I.see(
      commentInput[0],
      `.comment-item:nth-child(${lastComment}) .comment-header h4`,
  );
  I.see(
      commentInput[1],
      `.comment-item:nth-child(${lastComment}) .comment-body`,
  );
});
