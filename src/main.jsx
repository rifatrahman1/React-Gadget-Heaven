import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainlayouts from './Mainlayouts/Mainlayouts';
import Home from './Pages/Home';
import Statistics from './Pages/Statistics';
import Dashboard from './Pages/Dashboard';
import Gadgets from './Components/Gadgets';
import ErrorPage from './Components/ErrorPage';
import Details from './Components/Details';
import Context from './Components/Context';
// import Gadgets from './Components/Gadgets';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayouts></Mainlayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../category.json'),
        children: [
          {
            path: '',
            element: <Gadgets></Gadgets>,
            loader: () => fetch('../gadgets.json'),
          },
          {
            path: '/category/:category',
            element: <Gadgets></Gadgets>,
            loader: () => fetch('../gadgets.json'),
          },
        ],
      },
      {
        path: '/details/:params_id',
        element: <Details></Details>,
        loader: () => fetch('../gadgets.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context><RouterProvider router={router}></RouterProvider></Context>
  </StrictMode>,
)
