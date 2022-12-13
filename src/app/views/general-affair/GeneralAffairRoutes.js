import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const GeneralAffairMenu1 = Loadable(lazy(() => import('./Menu1')));
const GeneralAffairMenu2 = Loadable(lazy(() => import('./Menu2')));
const GeneralAffairMenu3 = Loadable(lazy(() => import('./Menu3')));

const generalAffairRoutes = [
    { path: '/general-affair/menu1', element: <GeneralAffairMenu1 />, auth: authRoles.admin },
    { path: '/general-affair/menu2', element: <GeneralAffairMenu2 />, auth: authRoles.admin },
    { path: '/general-affair/menu3', element: <GeneralAffairMenu3 />, auth: authRoles.admin },
];

export default generalAffairRoutes;
