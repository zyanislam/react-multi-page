import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Kanban from './pages/Kanban';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "kanban",
    element: <Kanban/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} /> 
    
);


