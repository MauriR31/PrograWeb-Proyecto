import React from 'react';
import { useNavigate } from 'react-router-dom';
import { images } from '../BD_Productos';

const SeccionCategoria = () => {
  const navigate = useNavigate();


  const handleProductSelection = (productId) => {
    console.log('ID del producto:', productId);
    const foundProduct = images.flat().find(image => image.idProducto === productId);
    console.log('Producto encontrado:', foundProduct);
    // Establecer el producto seleccionado en el estado, si es necesario
    // setSelectedProduct(foundProduct);
    // Enviar el ID del producto como parte del estado al navegar a la página de detalles
    navigate('/DetalleProducto', { state: { productId: productId } });
  };  
  // Filtrar las imágenes según la categoría "Mas Vendidos"
  const imagenesFiltradas = images.flat().filter(imagen => imagen.categoria === 'Mas Vendidos');

  return (    
    <>
      <div className="flex" style={{ marginTop: '90px', marginLeft: '7px' }}>
        <article className="mx-10 lg:mx-80 my-40" style={{ marginLeft: '130px' }}>
          <button onClick={() => handleProductSelection('id1')}>
            <img src="https://bicimex.com/storage/blog/230921110218_preparacion-completa-los-mejor.jpg" alt="Magic The Gathering" className="w-250 h-auto transition duration-300 transform hover:scale-110" style={{ width: '400px', height: 'auto' }} />
            <h2 className="text-xl font-semibold text-center text-gray-900 hover:text-blue-600 transition duration-300" style={{ marginTop: '40px', maxWidth: '360px', fontFamily: 'Arial, sans-serif' }}>Accesorios deportivos</h2>
          </button>
        </article>

        <div className="flex flex-col" style={{ marginBottom: '90px', marginLeft: '17px' }}>
          <article className="mb-4">
            <button onClick={() => handleProductSelection('id2')}>
              <img src="https://gestion.pe/resizer/H7AZTMTf2Wv9ccb2fKhvnQ1IoxE=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/N7QRB3PMDJFUZG2DSAIL36VPYM.jpeg" alt="Accesorios de computo" className="w-250 h-auto transition duration-300 transform hover:scale-110" style={{ width: '400px', height: 'auto' }} />
              <h2 className="text-xl font-semibold text-center text-gray-900 hover:text-blue-600 transition duration-300" style={{ marginTop: '40px', maxWidth: '360px', fontFamily: 'Arial, sans-serif' }}>Relojes inteligentes</h2>
            </button>
          </article>

          <article className="mb-4" style={{ marginTop: '110px', marginLeft: '17px' }}>
            <button onClick={() => handleProductSelection('id3')}>
              <img src="https://cnnespanol.cnn.com/wp-content/uploads/2021/09/audifonos-honor-earbuds-lite-2.png?w=804&h=530&crop=1" alt="Nuevos estilos urbanos" className="w-250 h-auto transition duration-300 transform hover:scale-110" style={{ width: '400px', height: 'auto' }} />
              <h2 className="text-xl font-semibold text-center text-gray-900 hover:text-blue-600 transition duration-300" style={{ marginTop: '40px', maxWidth: '360px', fontFamily: 'Arial, sans-serif' }}>Auriculares 2024</h2>
            </button>
          </article>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <table className="table-auto">
          <tbody>
            <tr>
              {imagenesFiltradas.map((imagen, index) => (
                <td key={index} className="px-20 py-8 text-center">
                  <button onClick={() => handleProductSelection(imagen.idProducto)}>
                    <img 
                      src={imagen.imageUrl}
                      alt={`Imagen ${index}`} 
                      className="w-56 h-auto transition duration-300 transform hover:scale-110" 
                    />
                  </button>
                  <h3 className="mt-4 text-base font-semibold">{imagen.title}</h3>
                  <h3 className="mt-4 text-base font-semibold">{imagen.marca}</h3>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default SeccionCategoria;
