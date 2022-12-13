import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const FinanceMenu1 = Loadable(lazy(() => import('./Menu1')));
const FinanceMenu2 = Loadable(lazy(() => import('./Menu2')));
const FinanceMenu3 = Loadable(lazy(() => import('./Menu3')));

const financeRoutes = [
    { path: '/finance-ga/menu1', element: <FinanceMenu1 />, auth: authRoles.admin },
    { path: '/finance-ga/menu2', element: <FinanceMenu2 />, auth: authRoles.admin },
    { path: '/finance-ga/menu3', element: <FinanceMenu3 />, auth: authRoles.admin },
];

export default financeRoutes;
