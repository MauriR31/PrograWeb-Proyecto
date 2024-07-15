import { useNavigate } from "react-router-dom";
import EstadoIndicadorProducto from "../../componentes/ConvetirOAdaptar/EstadoIndicadorProducto.jsx";

const productosPorPagina = 10;

const TablaProductos = ({ productos, cambiarEstadoProducto, paginaActual }) => {
  const navigate = useNavigate();
  const indiceInicio = (paginaActual - 1) * productosPorPagina;
  const indiceFin = paginaActual * productosPorPagina;
  const productosEnPagina = productos.slice(indiceInicio, indiceFin);

  const handleVerDetalle = (producto) => {
    navigate(`/Productos/AgregarProductos/DetalleProductos`, {
      state: { producto },
    });
  };

  return (
    <div className="py-2">
      <div className="overflow-x-auto rounded-md">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Detalle</th>
              <th className="py-2 px-4 border-b">Serie</th>
              <th className="py-2 px-4 border-b">Precio</th>
              <th className="py-2 px-4 border-b">Fecha Registro</th>
              <th className="py-2 px-4 border-b">Stock</th>
              <th className="py-2 px-4 border-b">Estado</th>
              <th className="py-2 px-4 border-b">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productosEnPagina.map((producto) => (
              <tr key={producto.id}>
                <td className="py-2 px-4 border-b">{producto.id}</td>
                <td className="py-2 px-4 border-b">{producto.nombre}</td>
                <td className="py-2 px-4 border-b">
                  {producto.serie || "----"}
                </td>
                <td className="py-2 px-4 border-b">
                  {producto.precio || "----"}
                </td>
                <td className="py-2 px-4 border-b">
                  {producto.fecha_registro.slice(0, 10) || "----"}
                </td>
                <td className="py-2 px-4 border-b">
                  {producto.stock || "----"}
                </td>
                <td className="py-2 px-4 border-b">
                  <EstadoIndicadorProducto estado={producto.estado} />
                </td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleVerDetalle(producto)}
                    className="px-2 py-1 bg-blue-500 text-white rounded-md mr-2"
                  >
                    Ver
                  </button>
                  <button
                    className={`px-2 py-1 rounded-md ${
                      producto.estado === "Activo"
                        ? "bg-green-500"
                        : "bg-red-500"
                    } text-white`}
                    onClick={() => cambiarEstadoProducto(producto.id)}
                  >
                    {producto.estado === "Activo" ? "Desactivar" : "Activar"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablaProductos;
