// Libraries

// Constants
import { ROUTES } from 'app/constants/routes';

// Types
import { Routes } from 'types/Routes';

// Components
import { Dashboard } from 'app/modules/Dashboard/Loadable';
import { User } from 'app/modules/User/Loadable';
import { Login } from 'app/modules/Login/Loadable';

import { NotFoundPage } from 'app/components/Pages/NotFoundPage/Loadable';

const routes: Routes = [
  {
    key: ROUTES.LOGIN.key,
    name: ROUTES.LOGIN.name,
    path: ROUTES.LOGIN.path,
    exact: ROUTES.LOGIN.exact,
    isPrivate: ROUTES.LOGIN.isPrivate,
    component: Login,
  },
  {
    key: ROUTES.NOT_FOUND.key,
    name: ROUTES.NOT_FOUND.name,
    path: ROUTES.NOT_FOUND.path,
    exact: ROUTES.NOT_FOUND.exact,
    isPrivate: ROUTES.NOT_FOUND.isPrivate,
    component: NotFoundPage,
  },
  {
    key: ROUTES.DASHBOARD.key,
    name: ROUTES.DASHBOARD.name,
    path: ROUTES.DASHBOARD.path,
    exact: ROUTES.DASHBOARD.exact,
    isPrivate: ROUTES.DASHBOARD.isPrivate,
    component: Dashboard,
  },
  {
    key: ROUTES.USER.key,
    name: ROUTES.USER.name,
    path: ROUTES.USER.path,
    exact: ROUTES.USER.exact,
    isPrivate: ROUTES.USER.isPrivate,
    component: User,
  },
];

export default routes;
