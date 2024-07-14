import React from 'react';
import { useNavigate } from 'react-router-dom';
import { images } from '../BD_Productos';

const SeccionCategoria = () => {
  const navigate = useNavigate();

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

  const imagenesFiltradas = images.flat().filter(imagen => imagen.categoria === 'Mas Vendidos');

  return (
    <>
      <table className="table-auto" style={{ marginLeft: '90px', marginRight: '300px', marginTop: '100px', marginBottom: '200px' }}>
        <tbody>
          <tr>
            <td className="mx-10 lg:mx-70 my-50" style={{ paddingRight: '55px' }}>
              <button onClick={() => handleProductSelection('id1')} className="flex flex-col items-center">
                <img
                  src="https://bicimex.com/storage/blog/230921110218_preparacion-completa-los-mejor.jpg"
                  alt="Magic The Gathering"
                  className="w-500 h-auto transition duration-300 transform"
                  style={{ maxWidth: '500px', height: '270px' }}
                />
                <h2 className="text-xl font-semibold text-center text-gray-900 hover:text-blue-600 transition duration-300 mt-4" style={{ maxWidth: '360px', fontFamily: 'Arial, sans-serif' }}>Accesorios deportivos</h2>
              </button>
            </td>
            <td className="mx-10 lg:mx-80 my-40" style={{ paddingRight: '55px' }}>
              <button onClick={() => handleProductSelection('id2')} className="flex flex-col items-center">
                <img
                  src="https://gestion.pe/resizer/H7AZTMTf2Wv9ccb2fKhvnQ1IoxE=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/N7QRB3PMDJFUZG2DSAIL36VPYM.jpeg"
                  alt="Accesorios de computo"
                  className="w-500 h-auto transition duration-300 transform"
                  style={{ maxWidth: '500px', height: '270px' }}
                />
                <h2 className="text-xl font-semibold text-center text-gray-900 hover:text-blue-600 transition duration-300 mt-4" style={{ maxWidth: '360px', fontFamily: 'Arial, sans-serif' }}>Relojes inteligentes</h2>
              </button>
            </td>
            <td className="mx-10 lg:mx-80 my-40">
              <button onClick={() => handleProductSelection('id3')} className="flex flex-col items-center">
                <img
                  src="https://cnnespanol.cnn.com/wp-content/uploads/2021/09/audifonos-honor-earbuds-lite-2.png?w=804&h=530&crop=1"
                  alt="Nuevos estilos urbanos"
                  className="w-500 h-auto transition duration-300 transform"
                  style={{ maxWidth: '500px', height: '270px' }}
                />
                <h2 className="text-xl font-semibold text-center text-gray-900 hover:text-blue-600 transition duration-300 mt-4" style={{ maxWidth: '360px', fontFamily: 'Arial, sans-serif' }}>Auriculares 2024</h2>
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
