import { IRoute } from '../../common/types/common';
import AdminLayout from '../../Layouts/AdminLayout';
// import UserLayout from '../../Layouts/UserLayout';
import NotFound from './NotFound';

export const NotFoundRoutes: IRoute = {
  path: '*',
  component: NotFound,
  layout: AdminLayout,
};
