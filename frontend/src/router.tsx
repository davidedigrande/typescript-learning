import { RouteObject } from 'react-router';
import BaseLayout from 'src/layouts/BaseLayout';
import Dashboard from 'src/content/Dashboard';

const routes: RouteObject[] = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />
      },
    ]
  },
];

export default routes;
