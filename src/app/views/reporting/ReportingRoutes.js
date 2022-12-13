import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const ReportingMenu1 = Loadable(lazy(() => import('./Menu1')));
const ReportingMenu2 = Loadable(lazy(() => import('./Menu2')));
const ReportingMenu3 = Loadable(lazy(() => import('./Menu3')));

const reportingRoutes = [
    { path: '/reporting/menu1', element: <ReportingMenu1 />, auth: authRoles.admin },
    { path: '/reporting/menu2', element: <ReportingMenu2 />, auth: authRoles.admin },
    { path: '/reporting/menu3', element: <ReportingMenu3 />, auth: authRoles.admin },
];

export default reportingRoutes;
