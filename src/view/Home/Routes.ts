import SimpleLayout from '../../Layouts/SimpleLayout';
import { IRoute } from '../../common/types/common';
import Home from './Home';

export const HomeRoute: IRoute = {
  path: '/home',
  component: Home,
  layout: SimpleLayout,
  exact: true,
};
