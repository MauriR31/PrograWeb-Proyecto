import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider, Route, Link} from "react-router-dom";
import Principal from './vistas/Pagina/Principal/Principal.jsx';
import PaginaError from './componentes/PaginaError.jsx';

// Parte de Vicuña
import AdUsuariosRegistrados from './vistas/Administrador/Usuarios/UsuariosRegistrados.jsx';
import AdUsReDetalle from './vistas/Administrador/Usuarios/Detalle.jsx';
import AdListOrdenes from './vistas/Administrador/Ordenes/Ordenes.jsx';
import AdListOrdDetalle from './vistas/Administrador/Ordenes/Detalle.jsx';

// Parte de Valdivia
import Nuevos from './vistas/Pagina/Principal/Nuevos.jsx';
import MasVendidos from './vistas/Pagina/Principal/MasVendidos.jsx';
import Ofertas from './vistas/Pagina/Principal/Ofertas.jsx';
import Busqueda from './vistas/Pagina/Principal/Busqueda.jsx';
import DetalleProducto from './vistas/Pagina/Principal/DetalleProducto.jsx';

// Parte de Carlo
import PaCarrito from './vistas/Pagina/Carrito/Carrito.jsx';
import PaCaCheckout from './vistas/Pagina/Carrito/Checkout.jsx';
import PaCaPedidoCompleto from './vistas/Pagina/Carrito/PedidoCompleto.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Principal />,
    errorElement: <PaginaError />,
  },

  // Parte de Valdivia
  {
    path: "/Nuevos",
    element: <Nuevos />,
  },
  {
    path: "/MasVendidos",
    element: <MasVendidos />,
  },

  {
    path: "/Ofertas",
    element: <Ofertas />,
  },
  {
    path: "/Busqueda",
    element: <Busqueda />,
  },
  {
    path: "/DetalleProducto",
    element: <DetalleProducto/>,
  },

  // Parte de cliff
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

  // Parte de Carlo
  {
    path: "/carrito",
    element: <PaCarrito />,
  },
  {
    path: "/carrito/checkout",
    element: <PaCaCheckout />,
  },
  {
    path: "/carrito/PedidoCompleto",
    element: <PaCaPedidoCompleto />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
