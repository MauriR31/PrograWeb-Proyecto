import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { images } from '../BD_Productos';

const SeccionCategoria = () => {
  const navigate = useNavigate(); // Get the navigate function

  const handleProductSelection = (productId) => {
    console.log('ID del producto:', productId);
    const foundProduct = images.flat().find(image => image.idProducto === productId);
    console.log('Producto encontrado:', foundProduct);

    // Conditional navigation based on productId
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

  // Filter images by the category "Ofertas"
  const imagenesFiltradas = images.flat().filter(imagen => imagen.categoria === 'Ofertas');

  return (
    <>
      <table className="table-auto mx-auto mt-24 mb-48">
        <tbody>
          <tr>
            <td className="px-14 py-10">
              <button onClick={() => handleProductSelection('id1')} className="flex flex-col items-center">
                <img
                  src="https://img.freepik.com/vector-gratis/conjunto-ilustracion-dibujos-animados-accesorios-telefono-movil-gafas-vr-modelo-3d-funda-telefonos-moviles-cargador-bateria-auriculares-reloj-inteligente-tarjeta-memoria-selfie-stick-tecnologia-concepto-telefono-inteligente_74855-23119.jpg?w=1060&t=st=1716358899~exp=1716359499~hmac=df29089f81b2463bed98b172ab893df2826974a0b3243e15169ecbd0158b44ee"
                  alt="Magic The Gathering"
                  className="w-full h-auto transition duration-300 transform"
                  style={{ maxWidth: '500px', height: '270px' }}
                />
                <h2 className="text-xl font-semibold text-center text-gray-900 hover:text-blue-600 transition duration-300 mt-4">Accesorios deportivos</h2>
              </button>
            </td>

            <td className="px-14 py-10">
              <button onClick={() => handleProductSelection('id2')} className="flex flex-col items-center">
                <img
                  src="https://www.asus.com/media/odin/websites/MX/News/execcy9rnquexicu/2x.jpg"
                  alt="Accesorios de computo"
                  className="w-full h-auto transition duration-300 transform"
                  style={{ maxWidth: '500px', height: '270px' }}
                />
                <h2 className="text-xl font-semibold text-center text-gray-900 hover:text-blue-600 transition duration-300 mt-4">Relojes inteligentes</h2>
              </button>
            </td>

            <td className="px-14 py-10">
              <button onClick={() => handleProductSelection('id3')} className="flex flex-col items-center">
                <img
                  src="https://images.ecestaticos.com/Kc2UgsvQ-IPr267jCQRLj9ucnvc=/125x0:2143x1511/600x450/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F300%2Fb1a%2Fabe%2F300b1aabe44666eb23d5a83848594fc1.jpg"
                  alt="Nuevos estilos urbanos"
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
                <td key={index} className="px-20 py-8 text-center">
                  <button onClick={() => handleProductSelection(imagen.idProducto)}>
                    <img 
                      src={imagen.imageUrl}
                      alt={`Imagen ${index}`} 
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

export default SeccionCategoria;
