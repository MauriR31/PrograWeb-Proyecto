import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider, Route, Link} from "react-router-dom";
import Principal from './vistas/Pagina/Principal/Principal.jsx';
import MasVendidos from './vistas/Pagina/Principal/MasVendidos.jsx';
import Ofertas from './vistas/Pagina/Principal/Ofertas.jsx';
import Nuevos from './vistas/Pagina/Principal/Nuevos.jsx';
import PaginaError from './componentes/PaginaError.jsx';
import AdUsuariosRegistrados from './vistas/Administrador/Usuarios/UsuariosRegistrados.jsx';
import AdUsReDetalle from './vistas/Administrador/Usuarios/Detalle.jsx';
import AdListOrdenes from './vistas/Administrador/Ordenes/Ordenes.jsx';
import AdListOrdDetalle from './vistas/Administrador/Ordenes/Detalle.jsx';
import Busqueda from './vistas/Pagina/Principal/Busqueda.jsx';
import DetalleProducto from './vistas/Pagina/Principal/DetalleProducto.jsx';
import Detalle from './vistas/Administrador/Usuarios/Detalle.jsx';

const router = createBrowserRouter([
  {
    path: "/Principal",
    element: <Principal />,
    errorElement: <PaginaError />,
    
  },

  {
    path: "/Nuevos",
    element: <Nuevos />,
    errorElement: <PaginaError />,
    
  },
{
  path: "/MasVendidos",
  element: <MasVendidos />,
  errorElement: <PaginaError />,
  
},

{
  path: "/Ofertas",
  element: <Ofertas />,
  errorElement: <PaginaError />,
  
},
  {
    path: "/Busqueda",
    element: <Busqueda />,
    errorElement: <PaginaError />,
    
  },

  {
    path: "/DetalleProducto",
    element: <DetalleProducto/>,
  
    
  },


  {
    path: "/Admin/UsersLog",
    element: <AdUsuariosRegistrados />,
  },
  {
    path: "/Admin/UsersLog/Detail/:id",
    element: <AdUsReDetalle />,
  },
  {
    path: "/Admin/OrdenLog",
    element: <AdListOrdenes />,
  },
  {
    path: "/Admin/OrdenLog/Detail/:id",
    element: <AdListOrdDetalle />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
