/**
 *
 * Asynchronously loads the component for FooterUser
 *
 */

import { lazyLoad } from 'utils/loadable';

export const FooterUser = lazyLoad(
  () => import('./index'),
  module => module.FooterUser,
);
