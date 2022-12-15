import { IRoute } from '../../common/types/common';
import SimpleLayout from '../../Layouts/SimpleLayout';
import Admin from './Admin';

export const AdminRoute: IRoute = {
  path: '/admin',
  component: Admin,
  layout: SimpleLayout,
  exact: true,
};
