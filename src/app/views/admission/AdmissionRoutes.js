import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const AdmissionSystemMenu1 = Loadable(lazy(() => import('./Menu1')));
const AdmissionSystemMenu2 = Loadable(lazy(() => import('./Menu2')));
const AdmissionSystemMenu3 = Loadable(lazy(() => import('./Menu3')));

const admissionSystemRoutes = [
    { path: '/admission/menu1', element: <AdmissionSystemMenu1 />, auth: authRoles.admin },
    { path: '/admission/menu2', element: <AdmissionSystemMenu2 />, auth: authRoles.admin },
    { path: '/admission/menu3', element: <AdmissionSystemMenu3 />, auth: authRoles.admin },
];

export default admissionSystemRoutes;
