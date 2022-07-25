import partners from '../views/pages/partner';
import favorites from '../views/pages/favorite';
import details from '../views/pages/details';

const routes = {
  '/': partners, // default page
  '/favorite': favorites,
  '/detail/:id': details,
};

export default routes;
