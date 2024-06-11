import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../Components/Layout/Layout';
import Settings from '../Pages/Setting';
import Home from '../Pages/Home';
import Widgets from '../Pages/Widgets';

const AllRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      { path: "/", element: <Home />},
      {path:"/setting", element: <Settings /> },
      {path:"/setting", element: <Settings /> },
      {path:"/widgets", element: < Widgets /> }
    ]
  }
]);

export default AllRoutes;