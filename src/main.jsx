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
import Cart from './Components/Cart';
import Wish from './Components/Wish';
import { CartProvider } from './Utilities/Cart_Context';
import HeadNews from './Components/HeadNews';

const router = createBrowserRouter([
  {
    path: '/',
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
            loader: () => fetch('../gadget.json'),
          },
          {
            path: '/category/:category',
            element: <Gadgets></Gadgets>,
            loader: () => fetch('../gadget.json'),
          },
        ],
      },
      {
        path: '/details/:params_id',
        element: <Details></Details>,
        loader: () => fetch('../gadget.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/news',
        element: <HeadNews></HeadNews>,
        loader: () => fetch('../news.json'),
      },

      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: '/dashboard/cart',
            element: <Cart></Cart>
          },
          {
            path: '/dashboard/wishlist',
            element: <Wish></Wish>
          }
        ]
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router}></RouterProvider>
    </CartProvider>
  </StrictMode>,
)
