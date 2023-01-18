import SimpleLayout from '../../../Layouts/SimpleLayout';
import { IRoute } from '../../../common/types/common';
import DiscoverGod from './DiscoverGod';
export const DiscoverGodRoute: IRoute = {
  path: '/discover-god',
  component: DiscoverGod,
  layout: SimpleLayout,
  exact: true,
};
