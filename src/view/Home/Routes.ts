import AuthLayout from '../../Layouts/AuthLayout';
import { IRoute } from '../../common/types/common';
import Home from './Home';

export const HomeRoute: IRoute = {
  path: '/signup',
  component: Home,
  layout: AuthLayout,
  exact: true,
};
