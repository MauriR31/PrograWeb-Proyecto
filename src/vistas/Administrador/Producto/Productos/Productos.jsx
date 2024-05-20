import { Link } from "react-router-dom";
import "./Productos.css";
import Encabezado from "../../../../componentes/Header/HeaderParcial.jsx";
import Footer from "../../../../componentes/Footer/Footer.jsx";

const Productos = () => {
  return (
    <div className="min-h-screen">
      <Encabezado />
      <main className="EstiloMain flex">
        <div className="BarraAdministrador">
          <ol>
            <li className="Supertexto">Admin</li>
            <li className="MoverDerecha">Dashboard</li>
            <li className="MoverDerecha">Usuarios Registrados</li>
            <li className="MoverDerecha">Productos</li>
            <li className="MoverDerecha">Órdenes</li>
            <li className="MoverDerecha">Productos más vendidos</li>
            <li className="MoverDerecha">Series</li>
          </ol>
        </div>
        <div className="PanelListaProductos">
          <header className="ProductosHeader">
            <h1>Productos</h1>
            <Link to="" className="ProductosAgregarProducto">
              + Agregar Producto
            </Link>
          </header>
          <main className="ProductosMain">
            <div className="ProductosContenedor">
              <div className="margin-bottom-4">
                <input
                  type="text"
                  placeholder="Buscar por ID, Serie o detalle..."
                  className="ProductosInput"
                />
              </div>
              <table className="ProductosTabla">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Detalle</th>
                    <th>Serie</th>
                    <th>Precio</th>
                    <th>Fecha de Registro</th>
                    <th>Stock</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Manga Dragon Ball Vol 1</td>
                    <td>Dragon Ball</td>
                    <td>S/ 30.99</td>
                    <td>11/02/2022</td>
                    <td>12</td>
                    <td>Activo</td>
                    <td>
                      <Link to="" className="ProductosLinksAccion">
                        Ver
                      </Link>
                      <p> | </p>
                      <button className="ProductosLinksAccion">
                        Desactivar
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="ProductosPaginacion">
                <button>Anterior</button>
                <div>1 2 3 4 5 ... 11</div>
                <button>Siguiente</button>
              </div>
            </div>
          </main>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Productos;
