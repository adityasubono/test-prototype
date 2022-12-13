import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const MaterialProductionMenu1 = Loadable(lazy(() => import('./Menu1')));
const MaterialProductionMenu2 = Loadable(lazy(() => import('./Menu2')));
const MaterialProductionMenu3 = Loadable(lazy(() => import('./Menu3')));

const materialProductionRoutes = [
    { path: '/material-production/menu1', element: <MaterialProductionMenu1 />, auth: authRoles.admin },
    { path: '/material-production/menu2', element: <MaterialProductionMenu2 />, auth: authRoles.admin },
    { path: '/material-production/menu3', element: <MaterialProductionMenu3 />, auth: authRoles.admin },
];

export default materialProductionRoutes;
