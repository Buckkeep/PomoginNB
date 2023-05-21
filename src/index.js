import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/Home.js';
import Timer from './pages/Timer/Timer.js';
import Both from './pages/Both/Both.js';
import Todo from './pages/Todo/Todo.js';
import Test from './exercise/exercise';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/timer',
    element: <Timer />,
  },
  {
    path: '/todo',
    element: <Todo />,
  },
  {
    path: '/both',
    element: <Both />,
  },
  {
    path: '/excercise',
    element: <Test />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
