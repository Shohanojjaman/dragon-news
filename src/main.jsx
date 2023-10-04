import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import NewsProvider from './Components/Context/NewsProvider';
import MainRoute from './Routes/MainRoute';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NewsProvider>
      <RouterProvider router={MainRoute}></RouterProvider>
    </NewsProvider>
  </React.StrictMode>
);
