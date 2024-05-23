import { useNavigate, useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Encabezado from "../../../componentes/Header/HCerrarSesion";
import Footer from "../../../componentes/Footer";

const DetalleProductos = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    if (state && state.producto) {
      setProducto(state.producto);
    } else {
      // Si no hay producto en el estado, redirige a la lista de productos
      navigate("/Productos");
    }
  }, [state, navigate]);

  return (
    <div className="mx-auto">
      <Encabezado />
      <main className="bg-gray-100 p-2">
        <div className="flex flex-col gap-4 mt-4 md:grid md:grid-cols-2">
          <div className="bg-white col-span-2 px-2 py-1 rounded-md">
            <h2 className="text-xl font-bold">
              {producto?.title || "Título de Producto"}
            </h2>
            <p className="text-gray-500 mt-2">
              Por: {producto?.marca || "Marca desconocida"} - Serie:{" "}
              {producto?.serie || "Serie desconocida"}
            </p>
          </div>
          <div className="bg-gray-200 h-64 rounded-md">
            {producto?.imagen ? (
              <img
                src={producto.imagen}
                alt={producto.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                Sin Imagen
              </div>
            )}
          </div>
          <div>
            <div className="bg-white border rounded-md my-16">
              <div className="rounded-md px-2 my-2 mx-1 flex bg-gray-300 justify-between items-center">
                <span className="text-lg font-bold text-red-500">
                  {producto?.estado === "Activo"
                    ? "DISPONIBLE"
                    : "NO DISPONIBLE"}
                </span>
                <span className="text-2xl font-bold">
                  S/{producto?.precio || "0.00"}
                </span>
              </div>
              <div className="flex my-2 mx-1 px-2 justify-between items-center mt-4">
                <span className="text-lg font-bold">Cantidad:</span>
                <span className="text-2xl font-bold">
                  {producto?.cantidad || "Sin Stock"}
                </span>
              </div>
              <div className="my-4 px-2 flex justify-center">
                {/* Botón que devuelve a la lista de productos */}
                <Link to="/Productos">
                  <button className="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded">
                    Volver a la lista de productos
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white my-8 rounded-md p-2">
          <h3 className="text-xl font-bold">Descripción</h3>
          <p className="mt-2 text-gray-700">
            {producto?.descripcion ||
              "No hay descripción disponible para este producto."}
          </p>
        </div>
        <div className="bg-gray-300 my-4 rounded-md px-2 py-4">
          <h3 className="text-xl font-bold ">Características del Producto:</h3>
          <ul className="list-disc pl-10 mt-2 pr-4 text-gray-700">
            {producto?.caracteristicas ? (
              producto.caracteristicas.map((caracteristica, index) => (
                <li key={index}>{caracteristica}</li>
              ))
            ) : (
              <li>No hay características disponibles.</li>
            )}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DetalleProductos;
