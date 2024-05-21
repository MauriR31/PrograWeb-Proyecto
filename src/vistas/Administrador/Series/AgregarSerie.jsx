import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageUploader from './ImageUploader';
import BarraCuenta from '../../../componentes/BarraCuenta';

function AgregarSerie() {
  
  // Estados para el nombre, descripción, imagen y lista de productos
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState(null);
  const [productos, setProductos] = useState([]);

  // Función para agregar un producto a la lista
  const agregarProducto = () => {
    // Generar descripción aleatoria para el producto
    const descripcionAleatoria = `Descripción aleatoria del producto ${productos.length + 1}`;
    // Agregar el producto a la lista
    setProductos([...productos, { id: productos.length + 1, descripcion: descripcionAleatoria }]);
  };

  // Función para remover un producto de la lista
  const removerProducto = (id) => {
    // Filtrar los productos para eliminar el que tenga el ID dado
    const nuevaListaProductos = productos.filter(producto => producto.id !== id);
    // Actualizar la lista de productos
    setProductos(nuevaListaProductos);
  };

  // Función para manejar la subida de la imagen
  const handleImageUpload = (file) => {
    setImagen(file);
  };

  // Función para guardar los cambios
  const guardarCambios = () => {
    // Aquí puedes colocar la lógica para guardar los cambios, por ejemplo, enviar los datos al servidor
    // Una vez guardados los cambios, redirigir a Serie.jsx
    // Simular la redirección a Serie.jsx
    window.location.href = '/series';
  };

  return (
    <div className="flex w-full">
      <main id="MainAgregarSerie" className="flex  w-full">
        <section id="ASCabecera" className="p-4 flex w-full">
          <BarraCuenta />
          <div className='w-full '>
            <h2 className="text-xl font-bold pl-10 w-full ">Agregar Serie</h2>
            <section id="ASContenido" className="p-4 ">
              <div className="w-1000 p-4 flex">
                {/* PARTE IMAGEN */}
                <div className=" bg-gray-200 border border-gray-300 rounded-md p-4 pt-20 mb-4 w-full">
                  <ImageUploader onImageUpload={handleImageUpload} image={imagen} />
                </div>
                {/* PARTE TEXTO */}
                <div className='w-full m-5'>
                  <label className="block mb-2 pl-5">Nombre</label>
                  <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="w-full px-4 py-2 pl-5 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  />
                  <label className="block mb-2 pl-5">Descripción</label>
                  <input
                    type="text"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    className="w-full px-4 py-2  pl-5 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  />
                  {/* Lista de productos */}
                  <div className='mb-5 '>
                    <div className='flex'> 
                    <h3 className="text-lg font-bold mr-50 w-full">Productos en la Serie</h3>
                    <Link to="/series/AgregarSeries/AgregarProducto" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">+</Link>

                    </div>

                    <table className="w-full mt-2">
                      <thead>
                        <tr>
                          <th className='w-20'>ID</th>
                          <th className='pl-20 w-20'>Descripción</th>
                          <th className='w-full'>Acción</th>
                        </tr>
                      </thead>
                      <tbody>
                        {productos.map(producto => (
                          <tr key={producto.id}>
                            <td>{producto.id}</td>
                            <td className='w-full pl-20'>{producto.descripcion}</td>
                            <td><button onClick={() => removerProducto(producto.id)} className="bg-red-500 text-white px-2 py-1 rounded-md">Remover</button></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {/* Botón de guardar cambios */}
                  <div className="w-1/2 p-4">
                    <button onClick={guardarCambios} className="bg-green-500 text-white px-4 py-2 rounded-md">
                    Guardar
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AgregarSerie;
