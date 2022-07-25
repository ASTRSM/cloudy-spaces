/* eslint-disable require-jsdoc */
import UrlParser from '../routes/url-parser';
const {default: routes} = require('../routes/routes');

async function renderPage() {
  const url = UrlParser.parseActiveUrlWithCombiner();
  const page = routes[url];
  $('#main-content').html(await page.render());
  await page.afterRender();
};

export default renderPage;
