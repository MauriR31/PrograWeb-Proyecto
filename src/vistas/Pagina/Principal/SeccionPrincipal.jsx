import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import productosAPI from '../../../api/ProductoVista';

function Productos() {
  const productosPorPagina = 10;
  const [productos, setProductos] = useState([]);
  const [buscarProducto, setBuscarProducto] = useState('');
  const [paginaActual, setPaginaActual] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const productosData = await productosAPI.findAll();
        setProductos(productosData);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    fetchProductos();
  }, []);

  const handleSearchChange = (e) => {
    setBuscarProducto(e.target.value.trim());
  };

  const handleSearch = () => {
    if (buscarProducto) {
      navigate('/Busqueda', { state: { searchTerm: buscarProducto } });
    }
  };

  const handleProductSelection = (producto) => {
    console.log("ID del producto:", producto.id);
    navigate('/DetalleProducto', { state: { productId: producto.id } });
  };

  // Filtrar productos por nombre de categoría
  const filtrarProductosPorCategoria = (nombreCategoria) => {
    return productos.filter(producto => producto.nombre_Categoria.toLowerCase() === nombreCategoria.toLowerCase());
  };

  const productosTecnologia = filtrarProductosPorCategoria('Tecnologia');
  const productosDeportes = filtrarProductosPorCategoria('Deportes');
  const productosModa = filtrarProductosPorCategoria('Moda');

  const obtenerProductosEnPagina = (productos) => {
    const indiceInicio = (paginaActual - 1) * productosPorPagina;
    const indiceFin = paginaActual * productosPorPagina;
    return productos.slice(indiceInicio, indiceFin);
  };

  const totalPaginas = (productos) => {
    return Math.ceil(productos.length / productosPorPagina);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <input
        type="text"
        value={buscarProducto}
        onChange={handleSearchChange}
        placeholder="Buscar producto por ID o nombre..."
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      />
      <button onClick={handleSearch} className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600">
        Buscar
      </button>

      <ProductosSeccion titulo="Tecnologia" productos={obtenerProductosEnPagina(productosTecnologia)} handleProductSelection={handleProductSelection} />
      <ProductosSeccion titulo="Deportes" productos={obtenerProductosEnPagina(productosDeportes)} handleProductSelection={handleProductSelection} />
      <ProductosSeccion titulo="Moda" productos={obtenerProductosEnPagina(productosModa)} handleProductSelection={handleProductSelection} />
    </div>
  );
}

function ProductosSeccion({ titulo, productos, handleProductSelection }) {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 5;

  const handleNext = () => {
    const newStartIndex = startIndex + itemsPerPage;
    if (newStartIndex < productos.length) {
      setStartIndex(newStartIndex);
    } else {
      setStartIndex(0);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">{titulo}</h2>
      <div className="flex justify-center">
        <section className="mx-8 lg:mx-20">
          <div className="flex items-center mt-4">
            <table className="table-auto w-full">
              <tbody>
                <tr className="bg-gray-100">
                  {productos.slice(startIndex, startIndex + itemsPerPage).map((producto, index) => (
                    <td key={index} className="px-4 py-4 text-center border">
                      <button onClick={() => handleProductSelection(producto)} className="focus:outline-none">
                        <img
                          src={producto.url}
                          alt={producto.nombre}
                          className="rounded-lg mb-2 hover:opacity-75 transition duration-300"
                          style={{ width: '230px', height: '160px' }}
                        />
                      </button>
                      <div className="mt-2">
                        <h3 className="text-lg font-semibold">{producto.nombre}</h3>
                        <p className="text-sm text-gray-400">{producto.marca}</p>
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-transparent text-black rounded-md shadow-lg"
        >
          &gt; Siguiente
        </button>
      </div>
    </div>
  );
}

export default Productos;
