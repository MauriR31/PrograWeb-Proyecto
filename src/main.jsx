import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider, Route, Link} from "react-router-dom";

// Importar los datos JSON
import DepartamentoData from './data/Departamento.json';
import DetalleData from './data/Detalle.json';
import DireccionData from './data/Direccion.json';
import DistritoData from './data/Distrito.json';
import EnvioData from './data/Envio.json';
import MedioPagoData from './data/MedioPago.json';
import OrdenData from './data/Orden.json';
import PagoData from './data/Pago.json';
import PaisData from './data/Pais.json';
import PersonaData from './data/Persona.json';
import ProductoData from './data/Producto.json';
import ProvinciaData from './data/Provincia.json';
import UsuarioData from './data/Usuario.json';
import UsuarioDireccionData from './data/UsuarioDireccion.json';


//el useContext
import { DatosProvider } from "./context/Datos.jsx";
import { FormularioProvider } from './context/Formulario.jsx';

// Paginas primarias
import Principal from "./vistas/Pagina/Principal/Principal.jsx";
import PaginaError from "./componentes/PaginaError.jsx";

// Parte de Vicuña
import AdUsuariosRegistrados from "./vistas/Administrador/Usuarios/UsuariosRegistrados.jsx";
import AdUsReDetalle from "./vistas/Administrador/Usuarios/Detalle.jsx";
import AdListOrdenes from "./vistas/Administrador/Ordenes/Ordenes.jsx";
import AdListOrdDetalle from "./vistas/Administrador/Ordenes/Detalle.jsx";

// Parte de Valdivia
import Nuevos from './vistas/Pagina/Principal/Nuevos/Nuevos.jsx';
import MasVendidos from './vistas/Pagina/Principal/MasVendidos/MasVendidos.jsx';
import Ofertas from './vistas/Pagina/Principal/Ofertas/Ofertas.jsx';
import Busqueda from './vistas/Pagina/Principal/Busqueda.jsx';
import DetalleProducto from './vistas/Pagina/Principal/DetalleProducto.jsx';

// Parte de Carlo
import PaCarrito from "./vistas/Pagina/Carrito/Carrito.jsx";
import PaCaCheckout from "./vistas/Pagina/Carrito/Checkout.jsx";
import PaCaPedidoCompleto from "./vistas/Pagina/Carrito/PedidoCompleto.jsx";

//Parte de Nicolas
import AdSeries from "./vistas/Administrador/Series/Series.jsx";
import AdAgregarSeries from "./vistas/Administrador/Series/AgregarSerie.jsx";
import AdAgregarProducto from "./vistas/Administrador/Series/AgregarProducto.jsx";
import UCambiarPassword from "./vistas/Usuarios/CambiarPassword.jsx";
import UDatosRegistro from "./vistas/Usuarios/DatosRegistro.jsx";

//Parte de Mauricio
import Login from "./vistas/Login/Login.jsx";
import Registrarse from "./vistas/Login/Registrarse.jsx";
import RecuperarPassword from "./vistas/Login/RecuperarPassword.jsx";
import Main from "./vistas/Usuarios/Main/Main.jsx";

//Parte de Erick
import DIMDashboard from "./vistas/Administrador/Dashboard.jsx";
import DIMProductos from "./vistas/Administrador/Producto/Productos.jsx";
import DIMAgregarProductos from "./vistas/Administrador/Producto/Agregar.jsx";
import DIMDetalleProductos from "./vistas/Administrador/Producto/DetalleProducto.jsx";

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
    element: <DetalleProducto />,
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

  // Parte de Mauricio
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registro",
    element: <Registrarse />,
  },
  {
    path: "/recuperarPassword",
    element: <RecuperarPassword />,
  },
  {
    path: "/usuarios/main/:id",
    element: <Main />,
  },

  // Parte de Nicolas
  {
    path: "/series",
    element: <AdSeries />,
  },
  {
    path: "/series/AgregarSeries",
    element: <AdAgregarSeries />,
  },
  {
    path: "/series/AgregarSeries/AgregarProducto",
    element: <AdAgregarProducto />,
  },
  {
    path: "/Usuario/CambiarPassword",
    element: <UCambiarPassword />,
  },
  {
    path: "/Usuario/DatosRegistro",
    element: <UDatosRegistro />,
  },

  //Parte de Erick

  {
    path: "/Dashboard",
    element: <DIMDashboard />,
  },

  {
    path: "/Productos",
    element: <DIMProductos />,
  },

  {
    path: "/Productos/AgregarProductos",
    element: <DIMAgregarProductos />,
  },

  {
    path: "/Productos/AgregarProductos/DetalleProductos",
    element: <DIMDetalleProductos />,
  },
]);

  // Guardar datos en el Local Storage solo si no existen
  const guardarEnLocalStorage = (clave, datos) => {
    if (!localStorage.getItem(clave)) {
        localStorage.setItem(clave, JSON.stringify(datos));
    }
  };  

  // Cargar los datos JSON al localStorage si no están ya almacenados
  guardarEnLocalStorage("departamentos", DepartamentoData);
  guardarEnLocalStorage("detalles", DetalleData);
  guardarEnLocalStorage("direcciones", DireccionData);
  guardarEnLocalStorage("distritos", DistritoData);
  guardarEnLocalStorage("envios", EnvioData);
  guardarEnLocalStorage("mediosPago", MedioPagoData);
  guardarEnLocalStorage("ordenes", OrdenData);
  guardarEnLocalStorage("pagos", PagoData);
  guardarEnLocalStorage("paises", PaisData);
  guardarEnLocalStorage("personas", PersonaData);
  guardarEnLocalStorage("productos", ProductoData);
  guardarEnLocalStorage("provincias", ProvinciaData);
  guardarEnLocalStorage("usuarios", UsuarioData);
  guardarEnLocalStorage("usuarioDireccion", UsuarioDireccionData);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DatosProvider>
      <FormularioProvider>
        <RouterProvider router={router} />
      </FormularioProvider>
    </DatosProvider>
  </React.StrictMode>
);
