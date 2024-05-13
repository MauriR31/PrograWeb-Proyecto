import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider, Route, Link} from "react-router-dom";
import Principal from './vistas/Pagina/Principal/Principal.jsx'
import PaginaError from './componentes/PaginaError.jsx'
import UsuariosRegistrados from './vistas/Administrador/Usuarios/UsuariosRegistrados.jsx';
import Registrarse from './vistas/Login/Registrarse.jsx';
import Login from './vistas/Login/Login.jsx';
import RecuperarPassword from './vistas/Login/RecuperarPassword.jsx';
import MainUsuario from './vistas/Pagina/Principal/MainUsuario.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Principal />,
    errorElement: <PaginaError />
  },
  {
    path: "/Admin/UsersLog",
    element: <UsuariosRegistrados />
  },
  {
    path: "/Registrarse",
    element: <Registrarse />
  },
  {
    path: "/Login",
    element: <Login />
  },
  {
    path: "/RecuperarPassword",
    element: <RecuperarPassword />
  },
  {
    path: "/MainUsuario",
    element: <MainUsuario />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
