import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const SchoolManagementMenu1 = Loadable(lazy(() => import('./Menu1')));
const SchoolManagementMenu2 = Loadable(lazy(() => import('./Menu2')));
const SchoolManagementMenu3 = Loadable(lazy(() => import('./Menu3')));

const schoolManagementRoutes = [
    { path: '/school-management/menu1', element: <SchoolManagementMenu1 />, auth: authRoles.admin },
    { path: '/school-management/menu2', element: <SchoolManagementMenu2 />, auth: authRoles.admin },
    { path: '/school-management/menu3', element: <SchoolManagementMenu3 />, auth: authRoles.admin },
];

export default schoolManagementRoutes;
