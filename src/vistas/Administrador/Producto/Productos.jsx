import { useState, useEffect } from "react";
import Encabezado from "../../../componentes/Header/HCerrarSesion";
import Footer from "../../../componentes/Footer";
import Sidebar from "../../../componentes/BarraCuenta";
import Barra from "../../../componentes/Administrador/BarraProductos";
import BusquedaProductos from "../../../componentes/Administrador/BusquedaProductos";
import TablaProductos from "../../../componentes/Administrador/TablaProductos";
import BarraPaginacion from "../../../componentes/Administrador/ProductosPaginacion";

const Productos = () => {
  const productosPorPagina = 10;
  const [productos, setProductos] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [buscarProducto, setBuscarProducto] = useState("");

  useEffect(() => {
    const productosData = JSON.parse(localStorage.getItem("productos"));
    if (productosData) {
      const productosConEstado = productosData.map((producto) => ({
        ...producto,
        estado: "Activo",
      }));
      setProductos(productosConEstado);
    }
  }, []);

  const handleSearchChange = (e) => {
    setBuscarProducto(e.target.value);
    setPaginaActual(1);
  };

  const cambiarEstadoProducto = (id) => {
    setProductos((prevProductos) =>
      prevProductos.map((producto) =>
        producto.id === id
          ? {
              ...producto,
              estado: producto.estado === "Activo" ? "Inactivo" : "Activo",
            }
          : producto
      )
    );

    const productosLocalStorage = JSON.parse(localStorage.getItem("productos"));
    const productosActualizados = productosLocalStorage.map((producto) => {
      if (producto.id === id) {
        return {
          ...producto,
          estado: producto.estado === "Activo" ? "Inactivo" : "Activo",
        };
      }
      return producto;
    });
    localStorage.setItem("productos", JSON.stringify(productosActualizados));
  };

  const filteredProducts = productos.filter((producto) =>
    producto.title && producto.title.toLowerCase().includes(buscarProducto.toLowerCase())
  );
  

  const totalPaginas = Math.ceil(filteredProducts.length / productosPorPagina);

  const irAPagina = (pagina) => {
    setPaginaActual(pagina);
  };

  return (
    <div>
      <Encabezado />
      <main className="flex bg-black">
        <Sidebar />
        <div className="flex-1 flex flex-col ml-4 mt-4 mr-4">
          <Barra />
          <BusquedaProductos
            buscarProducto={buscarProducto}
            handleSearchChange={handleSearchChange}
          />
          <TablaProductos
            productos={filteredProducts}
            cambiarEstadoProducto={cambiarEstadoProducto}
            paginaActual={paginaActual}
          />
          <BarraPaginacion
            paginaActual={paginaActual}
            totalPaginas={totalPaginas}
            onChangePagina={irAPagina}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Productos;
