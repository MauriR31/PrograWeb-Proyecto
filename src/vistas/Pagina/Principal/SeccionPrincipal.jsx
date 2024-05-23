import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { colecciones, images } from '../Principal/BD_Productos';

const SeccionPrincipal = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.trim());
    // Ocultar la advertencia cuando el usuario empiece a escribir
    setShowWarning(false);
  };

  const handleSearch = () => {
    if (searchTerm) {
      // Redirigir a /Busqueda con el término de búsqueda
      navigate('/Busqueda', { state: { searchTerm } });
    } else {
      // Si no hay término de búsqueda, mostrar una advertencia
      setShowWarning(true);
    }
  };   

  const handleProductSelection = (image) => {
    console.log("ID del producto:", image.idProducto); // Imprime el ID del producto en la consola
    navigate('/DetalleProducto', { state: { productId: image.idProducto } });
  };

  const ProductTable = () => {
    return (
      <div className="flex justify-center">
        <section className="mx-8 lg:mx-20">
          <table className="table-auto">
            <tbody>
              <tr>
                {colecciones.map((coleccion, index) => (
                  <td key={index} className="px-20 py-8 text-center" style={{ maxHeight: '250px' }}>
                    <button onClick={() => handleProductSelection(coleccion)}>
                      <img src={coleccion.imageUrl} alt={coleccion.altText} className="w-72 h-auto transition duration-300 transform hover:scale-110" />
                    </button>
                    <h3 className="mt-4 text-lg font-semibold" style={{ width: '300px' }}>{coleccion.title}</h3>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    );
  };

  const ImageTable = () => {
    return (
      <div className="flex justify-center mt-8" style={{ margin: '75px' }}>
        <section className="mx-8 lg:mx-20">
          <table className="table-auto">
            <tbody>
              {images.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((image, cellIndex) => (
                    <td key={cellIndex} className="px-20 py-50 text-center">
                      <button onClick={() => handleProductSelection(image)}>
                        <img
                          src={image.imageUrl}
                          alt={image.altText}
                          className="transition duration-400 transform hover:scale-110"
                          style={{ width: '290px', height: '140px', alignContent: 'center', marginTop: '30px' }}
                        />
                      </button>
                      <div className="mt-4">
                        <h3 className="text-base font-semibold">
                          {image.title}
                        </h3>
                        <h4 className="text-base font-semibold text-gray-400 text-sm mb-15 px-10 py-5">
                          {image.marca}
                        </h4>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    );
  };

  return (
    <>
      <main className='mainBarraBusqueda'>
        <div className="flex items-center space-x-2 p-2 bg-white rounded mx-auto" style={{ maxWidth: '800px', marginTop: '40px', marginBottom: '30px', cursor: 'text' }}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            className="flex-grow p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mr-6 cursor-text"
            placeholder="Buscar..."
          />
          <button onClick={handleSearch} disabled={!searchTerm} className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ${searchTerm ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
            Buscar
          </button>
        </div>
        {/* Mostrar el mensaje de advertencia si no hay término de búsqueda */}
        {showWarning && <p style={{ color: 'red' }}>Por favor, ingrese un término de búsqueda.</p>}
      </main>
      <ProductTable />
      <ImageTable />
    </>
  );
};

export default SeccionPrincipal;
