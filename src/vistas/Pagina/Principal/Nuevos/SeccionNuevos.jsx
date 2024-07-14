import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { images } from '../BD_Productos';

const SeccionNuevos = () => {
  const navigate = useNavigate(); // Get the navigate function

  const handleProductSelection = (productId) => {
    console.log('ID del producto:', productId);
    const foundProduct = images.flat().find(image => image.idProducto === productId);
    console.log('Producto encontrado:', foundProduct);

    if (productId === 'id1') {
      navigate('/AccesoriosDeportivos', { state: { productId: productId } });
    } else if (productId === 'id2') {
      navigate('/RelojesInteligentes', { state: { productId: productId } });
    } else if (productId === 'id3') {
      navigate('/Auriculares2024', { state: { productId: productId } });
    } else {
      navigate('/DetalleProducto', { state: { productId: productId } });
    }
  };

  const imagenesFiltradas = images.flat().filter(imagen => imagen.categoria === 'Nuevos');

  return (
    <>
      <table className="table-auto mx-auto mt-24 mb-48">
        <tbody>
          <tr>
            <td className="px-14 py-10">
              <button onClick={() => handleProductSelection('id1')} className="flex flex-col items-center">
                <img
                  src="https://i.blogs.es/f16b7c/xbox-ps5-nintendo-switch/1366_2000.webp"
                  alt="Accesorios deportivos"
                  className="w-full h-auto transition duration-300 transform"
                  style={{ maxWidth: '500px', height: '270px' }}
                />
                <h2 className="text-xl font-semibold text-center text-gray-900 hover:text-blue-600 transition duration-300 mt-4">Accesorios deportivos</h2>
              </button>
            </td>
            <td className="px-14 py-10">
              <button onClick={() => handleProductSelection('id2')} className="flex flex-col items-center">
                <img
                  src="https://hiraoka.com.pe/media/mageplaza/blog/post/a/c/accesorios-gamer_1.jpg"
                  alt="Relojes inteligentes"
                  className="w-full h-auto transition duration-300 transform"
                  style={{ maxWidth: '500px', height: '270px' }}
                />
                <h2 className="text-xl font-semibold text-center text-gray-900 hover:text-blue-600 transition duration-300 mt-4">Relojes inteligentes</h2>
              </button>
            </td>
            <td className="px-14 py-10">
              <button onClick={() => handleProductSelection('id3')} className="flex flex-col items-center">
                <img
                  src="https://img.freepik.com/fotos-premium/editorial-moda-urbana-streetwear-modelo-que-combina-estilo-informal-deportivo_762026-1159.jpg?w=996"
                  alt="Auriculares 2024"
                  className="w-full h-auto transition duration-300 transform"
                  style={{ maxWidth: '500px', height: '270px' }}
                />
                <h2 className="text-xl font-semibold text-center text-gray-900 hover:text-blue-600 transition duration-300 mt-4">Auriculares 2024</h2>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="flex justify-center mt-8">
        <table className="table-auto">
          <tbody>
            {imagenesFiltradas.reduce((rows, imagen, index) => {
              const rowIndex = Math.floor(index / 5);
              if (!rows[rowIndex]) {
                rows[rowIndex] = [];
              }
              rows[rowIndex].push(
                <td key={imagen.idProducto} className="px-20 py-8 text-center">
                  <button onClick={() => handleProductSelection(imagen.idProducto)}>
                    <img 
                      src={imagen.imageUrl}
                      alt={`Imagen ${index}`} 
                      className="transition duration-300 transform hover:scale-110"
                      style={{ width: '180px', height: '150px' }}
                    />
                  </button>
                  <h3 className="mt-4 text-base font-semibold">{imagen.title}</h3>
                  <h3 className="mt-4 text-base font-semibold">{imagen.marca}</h3>
                </td>
              );
              return rows;
            }, []).map((row, rowIndex) => (
              <tr key={rowIndex}>{row}</tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SeccionNuevos;
