import AuthLayout from '../../Layouts/AuthLayout';
import { IRoute } from '../../common/types/common';
import NotFound from './NotFound';

export const HomeRoute: IRoute = {
  path: '/not-found',
  component: NotFound,
  layout: AuthLayout,
  exact: true,
};
