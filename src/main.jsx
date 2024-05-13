import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider, Route, Link} from "react-router-dom";
import Principal from './vistas/Pagina/Principal/Principal.jsx'
import PaginaError from './componentes/PaginaError.jsx'
import AdUsuariosRegistrados from './vistas/Administrador/Usuarios/UsuariosRegistrados.jsx';
import AdUsReDetalle from './vistas/Administrador/Usuarios/Detalle.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Principal />,
    errorElement: <PaginaError />
  },
  {
    path: "/Admin/UsersLog",
    element: <AdUsuariosRegistrados />
  },
  {
    path: "/Admin/UsersLog/Detail/:id",
    element: <AdUsReDetalle />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
