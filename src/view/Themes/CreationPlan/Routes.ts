import SimpleLayout from '../../../Layouts/SimpleLayout';
import { IRoute } from '../../../common/types/common';
import CreationPlan from './CreationPlan';
export const CreationPlanRoute: IRoute = {
  path: '/creation-plan-of-god',
  component: CreationPlan,
  layout: SimpleLayout,
  exact: true,
};
