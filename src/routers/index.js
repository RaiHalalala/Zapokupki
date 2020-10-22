import React from 'react';

const Main = React.lazy(() => import('../pages/main'));

const routes = [
  {
    path: '/',
    Component: Main
  }
];

export default routes;