import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageUploader from './ImageUploader';
import BarraCuenta from '../../../componentes/BarraCuenta';
import HVacio from '../../../componentes/Header/HVacio';
import Footer from '../../../componentes/Footer';

function AgregarSerie() {
  // Estados para el nombre, descripción, imagen y lista de productos
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState(null);
  const [productos, setProductos] = useState([
    { id: 1, desc: "Volumen 1" },
    { id: 2, desc: "Volumen 2" },
    { id: 3, desc: "Volumen 3" },
    { id: 4, desc: "Volumen 4" },
  ]);

  const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios'));
  // Función para manejar la subida de la imagen
  const handleImageUpload = (file) => {
    setImagen(file);
  };

  // Función para agregar un producto a la lista
  const agregarProducto = () => {
    const nuevoProducto = { id: productos.length + 1, desc: `Volumen ${productos.length + 1}` };
    setProductos([...productos, nuevoProducto]);
  };

  // Función para remover un producto de la lista
  const removerProducto = (id) => {
    const nuevaLista = productos.filter(producto => producto.id !== id);
    setProductos(nuevaLista);
  };

  // Función para guardar los cambios y actualizar los datos en el componente Series
  const guardarCambios = () => {
    window.location.href = '/series';
  };

  return (
    <>
      <HVacio />
      <div className="flex w-full">
        <main id="MainAgregarSerie" className="flex w-full">
          <section id="ASCabecera" className="flex w-full overflow-y-auto">
            <BarraCuenta />
            <div className='w-full h-100'>
              <h2 className="text-xl font-bold pl-10 pt-5 w-full">Agregar Serie</h2>
              <section id="ASContenido" className="p-2 h-50 ">
                <div className="w-1000 p-4 flex">
                  {/* PARTE IMAGEN */}
                  <div className="bg-gray-200 border border-gray-300 rounded-md p-4 pt-20 mb-4 w-full">
                    <ImageUploader onImageUpload={handleImageUpload} image={imagen} />
                  </div>
                  {/* PARTE TEXTO */}
                  <div className='w-full m-5'>
                    <label className="block mb-2 pl-5">Nombre</label>
                    <input
                      type="text"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      className="max-w-3xl w-full px-4 py-2 rounded-3xl border-slate-950 border-2 bg-white text-gray-800 focus:outline-none"
                    />
                    <label className="block mb-2 pl-5">Descripción</label>
                    <input
                      type="text"
                      value={descripcion}
                      onChange={(e) => setDescripcion(e.target.value)}
                      className="max-w-3xl w-full px-4 py-2 rounded-3xl border-slate-950 border-2 bg-white text-gray-800 focus:outline-none"
                    />
                    {/* Lista de productos */}
                    <div className='mb-5 '>
                      <div className='flex'>
                        <h3 className="text-lg font-bold mr-50 w-full h-50">Productos en la Serie</h3>
                        <button onClick={agregarProducto} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
                        +
                        
                        </button>
                        <Link to="/series/AgregarSeries/AgregarProducto" className="bg-blue-500 tex pt-2 rounded-md text-white">Agregar</Link>
                      </div>
                      <table className="w-full mt-3 h-1/2 border-2">
                        <thead>
                          <tr>
                            <th className='w-20 bg-green-200'>ID</th>
                            <th className='pl-20 w-20 bg-green-200'>Descripción</th>
                            <th className='w-full bg-green-200'>Acción</th>
                          </tr>
                        </thead>
                        <tbody>
                          {productos.map(producto => (
                            <tr key={producto.id}>
                              <td>{producto.id}</td>
                              <td className='w-full pl-20'>{producto.desc}</td>
                              <td>
                                <button onClick={() => removerProducto(producto.id)} className="bg-red-500 text-white px-2 py-1 rounded-md">Remover</button>
                              </td>
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
      <Footer />
      <section className='bg-gray-800 text-gray-800'>.</section>
      <section className='bg-gray-800 text-gray-800'>.</section>
      <section className='bg-gray-800 text-gray-800'>.</section>
      <section className='bg-gray-800 text-gray-800'>.</section>
      <section className='bg-gray-800 text-gray-800'>.</section>
      <section className='bg-gray-800 text-gray-800'>.</section>
    </>
  );
}

export default AgregarSerie;
