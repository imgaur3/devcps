import AuthLayout from '../../Layouts/AuthLayout';
import { IRoute } from '../../common/types/common';
import Home from './Home';

export const HomeRoute: IRoute = {
  path: '/home',
  component: Home,
  layout: AuthLayout,
  exact: true,
};