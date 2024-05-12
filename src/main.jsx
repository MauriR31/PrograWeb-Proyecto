import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider, Route, Link} from "react-router-dom";
import Principal from './vistas/Pagina/Principal/Principal.jsx'
import PaginaError from './componentes/PaginaError.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Principal />,
    errorElement: <PaginaError />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
