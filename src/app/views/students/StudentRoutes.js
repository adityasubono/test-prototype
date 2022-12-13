import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const StudentMenu1 = Loadable(lazy(() => import('./Menu1')));
const StudentMenu2 = Loadable(lazy(() => import('./Menu2')));
const StudentMenu3 = Loadable(lazy(() => import('./Menu3')));

const studentRoutes = [
    { path: '/students/menu1', element: <StudentMenu1 />, auth: authRoles.admin },
    { path: '/students/menu2', element: <StudentMenu2 />, auth: authRoles.admin },
    { path: '/students/menu3', element: <StudentMenu3 />, auth: authRoles.admin },
];

export default studentRoutes;
