import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate desde react-router-dom
import { images } from '../BD_Productos';

const SeccionNuevos = () => {
  const navigate = useNavigate(); // Obtiene la función navigate

  const handleProductSelection = (productId) => {
    console.log('ID del producto:', productId);
    const foundProduct = images.flat().find(image => image.idProducto === productId);
    console.log('Producto encontrado:', foundProduct);
    
    navigate('/DetalleProducto', { state: { productId: productId } });

  };

  // Filtrar las imágenes según la categoría "Nuevos"
  const imagenesFiltradas = images.flat().filter(imagen => imagen.categoria === 'Nuevos');

  return (
    <>
      <div className="flex" style={{ marginTop: '90px', marginLeft: '7px' }}>
        <article className="mx-10 lg:mx-80 my-40" style={{ marginLeft: '130px' }}>
          <button onClick={() => navigate('/ruta')}>
            <img src="https://i.blogs.es/f16b7c/xbox-ps5-nintendo-switch/1366_2000.webp" alt="Magic The Gathering" className="w-250 h-auto transition duration-300 transform hover:scale-110" style={{ width: '400px', height: 'auto' }} />
            <h2 className="text-xl font-semibold text-center text-gray-900 hover:text-blue-600 transition duration-300" style={{ marginTop: '40px', maxWidth: '360px', fontFamily: 'Arial, sans-serif' }}>Últimos lanzamientos</h2>
          </button>
        </article>

        <div className="flex flex-col" style={{ marginBottom: '90px', marginLeft: '17px' }}>
          <article className="mb-4">
            <button onClick={() => navigate('/ruta')}>
              <img src="https://hiraoka.com.pe/media/mageplaza/blog/post/a/c/accesorios-gamer_1.jpg" alt="GI JOE Classified Series" className="w-250 h-auto transition duration-300 transform hover:scale-110" style={{ width: '400px', height: 'auto' }} />
              <h2 className="text-xl font-semibold text-center text-gray-900 hover:text-blue-600 transition duration-300" style={{ marginTop: '40px', maxWidth: '360px', fontFamily: 'Arial, sans-serif' }}>Accesorios de computo</h2>
            </button>
          </article>

          <article className="mb-4" style={{ marginTop: '110px', marginLeft: '17px' }}>
            <button onClick={() => navigate('/ruta')}>
              <img src="https://img.freepik.com/fotos-premium/editorial-moda-urbana-streetwear-modelo-que-combina-estilo-informal-deportivo_762026-1159.jpg?w=996" className="w-250 h-auto transition duration-300 transform hover:scale-110" style={{ width: '400px', height: 'auto' }} />
              <h2 className="text-xl font-semibold text-center text-gray-900 hover:text-blue-600 transition duration-300" style={{ marginTop: '40px', maxWidth: '360px', fontFamily: 'Arial, sans-serif' }}>Nuevos estilos urbanos</h2>
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

export default SeccionNuevos;
