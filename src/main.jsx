import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Dashboard from "./vistas/Administrador/Dashboard/Dashboard.jsx";
import ListadoProductosAdmin from "./vistas/Administrador/Producto/Productos/Productos.jsx"
import AgregarProductoAdmin from "./vistas/Administrador/Producto/AgregarProducto/AgregarProducto.jsx";
import VisualizarDetalleProducto from "./vistas/Pagina/Principal/DetalleProducto/DetalleProducto.jsx"
import PaginaError from "./componentes/PaginaError.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListadoProductosAdmin />,
    errorElement: <PaginaError />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
