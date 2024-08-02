import React from 'react';
 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
 
import HomePage from './pages/homePage';
import NoPage from './pages/noPage';
const routerPage = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <NoPage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={routerPage} />
);
 
