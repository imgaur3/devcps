import { IRoute } from '../../common/types/common';
import AuthLayout from '../../Layouts/AuthLayout';
import NotFound from './NotFound';

export const NotFoundRoute: IRoute = {
  path: '*',
  component: NotFound,
  layout: AuthLayout,
  exact: true,
};
