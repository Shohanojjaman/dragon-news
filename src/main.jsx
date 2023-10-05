import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import CategoryContextProvider from './Components/Context/CategoryContextProvider';
import NewsProvider from './Components/Context/NewsProvider';
import MainRoute from './Routes/MainRoute';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NewsProvider>
      <CategoryContextProvider>
        <RouterProvider router={MainRoute}></RouterProvider>
      </CategoryContextProvider>
    </NewsProvider>
  </React.StrictMode>
);
