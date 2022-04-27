// Libraries

// Constants
import { ROUTES } from 'app/constants/routes';

// Types
import { Routes } from 'types/Routes';

// Components
import { Home } from './Home/Loadable';
import { Blog } from './Blog/Loadable';

const routes: Routes = [
  {
    key: ROUTES.HOME.key,
    name: ROUTES.HOME.name,
    path: ROUTES.HOME.path,
    exact: ROUTES.HOME.exact,
    isPrivate: ROUTES.HOME.isPrivate,
    component: Home,
  },
  {
    key: ROUTES.BLOG.key,
    name: ROUTES.BLOG.name,
    path: ROUTES.BLOG.path,
    exact: ROUTES.BLOG.exact,
    isPrivate: ROUTES.BLOG.isPrivate,
    component: Blog,
  },
  {
    key: ROUTES.USER.key,
    name: ROUTES.USER.name,
    path: ROUTES.USER.path,
    exact: ROUTES.USER.exact,
    isPrivate: ROUTES.USER.isPrivate,
    component: Home,
  },
];

export default routes;
