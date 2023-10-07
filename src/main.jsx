import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import AuthContextProvider from './Components/Context/AuthContextProvider';
import CategoryContextProvider from './Components/Context/CategoryContextProvider';
import NewsProvider from './Components/Context/NewsProvider';
import MainRoute from './Routes/MainRoute';
import './index.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <NewsProvider>
        <CategoryContextProvider>
          <RouterProvider router={MainRoute}></RouterProvider>
        </CategoryContextProvider>
      </NewsProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
