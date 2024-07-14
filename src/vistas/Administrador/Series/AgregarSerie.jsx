
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ImageUploader from './ImageUploader';
import HVacio from '../../../componentes/Header/HVacio';
import Footer from '../../../componentes/Footer';
import BotonMenuPagina from "../../../componentes/ConvetirOAdaptar/BotonMenuPagina";

function AgregarSerie() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const nprodQuery = parseInt(query.get('nprod'), 10) || 0;

  const [nombre, setNombre] = useState(query.get('nombre') || '');
  const [descripcion, setDescripcion] = useState(query.get('desc') || '');
  const [imagen, setImagen] = useState(null);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    setProductos(Array.from({ length: nprodQuery }, (_, i) => ({ id: i + 1, desc: `Producto ${i + 1}` })));
  }, [nprodQuery]);

  const handleImageUpload = (file) => {
    setImagen(file);
  };

  const agregarProducto = () => {
    const nuevoProducto = { id: productos.length + 1, desc: `Producto ${productos.length + 1}` };
    setProductos([...productos, nuevoProducto]);
  };

  const removerProducto = (id) => {
    const nuevaLista = productos.filter(producto => producto.id !== id);
    setProductos(nuevaLista);
  };

  const guardarCambios = () => {
    console.log("Guardando cambios", { nombre, descripcion, productos });
    window.location.href = '/series';
  };

  return (
    <>
      <HVacio />
      <div className="flex w-full">
        <main id="MainAgregarSerie" className="flex w-full">
          <section id="ASCabecera" className="flex w-full overflow-y-auto">
            <BotonMenuPagina />
            <div className='w-full h-100'>
              <h2 className="text-xl font-bold pl-10 pt-5 w-full">Agregar Serie</h2>
              <section id="ASContenido" className="p-2 h-50 ">
                <div className="w-1000 p-4 flex">
                  <div className="bg-gray-200 border border-gray-300 rounded-md p-4 pt-20 mb-4 w-full">
                    <ImageUploader onImageUpload={handleImageUpload} image={imagen} />
                  </div>
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
                    <div className='mb-5 '>
                      <div className='flex'>
                        <h3 className="text-lg font-bold mr-50 w-full h-50">Productos en la Serie</h3>
                        <button onClick={agregarProducto} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
                          +
                        </button>
                        <Link
                          to={{
                            pathname: "/series/AgregarSeries/AgregarProducto",
                            search: `?nombre=${nombre}&desc=${descripcion}&nprod=${productos.length}`
                          }}
                          className="bg-blue-500 text-white px-4 py-2 rounded-md"
                        >
                          Agregar
                        </Link>
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
