import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BarraCuenta from '../../../componentes/BarraCuenta';
import BarraPaginacion from '../../../componentes/BarraPaginacion';
import ImageUploader from './ImageUploader';
import { Link } from 'react-router-dom';

function AgregarSeries({ onGuardarSerie }) {
  const [Snombre, setSNombre] = useState('');
  const [Sdirecc, setSdirecc] = useState('');
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaSerie = { nombre: Snombre, direccion: Sdirecc, productos };
    onGuardarSerie(nuevaSerie);
    navigate('/');
  };

  const handleAddProduct = () => {
    const newProduct = {
      id: productos.length + 1,
      descripcion: 'Descripción del producto',
    };
    setProductos([...productos, newProduct]);
  };

  const handleRemoveProduct = (id) => {
    const updatedProducts = productos.filter(producto => producto.id !== id);
    setProductos(updatedProducts);
  };

  return (
    <div className="flex flex-col w-full">
      <main id="MainUsuariosRegistradosAdmin" className="flex flex-col w-full">


        


        <section className="flex bg-gray-100 w-full p-4">

          <BarraCuenta />

          <section>
          <section id="MURACabecera" className="p-2 w-full">
          <h2 className="text-xl font-bold bg-gray-200 w-full">Agregar Serie</h2>
        </section>
          <div className="w-full mb-4 pl-10">
            <ImageUploader />
          </div>

          <div className="w-full mb-4 pl-10">
            <label className="font-bold block">Nombre</label>
            <input
              type="text"
              className="border-2 border-gray-400 rounded-md w-full p-2 mb-4"
              value={Snombre}
              onChange={(e) => setSNombre(e.target.value)}
            />
            <label className="font-bold block">Dirección</label>
            <input
              type="text"
              className="border-2 border-gray-400 rounded-md w-full p-2 mb-4"
              value={Sdirecc}
              onChange={(e) => setSdirecc(e.target.value)}
            />
            <div className='flex w-full'>
              <div>
                <h2 className="text-xl font-bold w-full pb-3 pr-2000">Productos en la serie</h2>
                <article id="MURALCabecera" className="flex bg-gray-300 p-2">
                  <p className="flex-none w-12">ID</p>
                  <p className="flex-auto w-60">Descripción</p>
                  <p className="flex-auto w-60">Acción</p>
                </article>
                <ul className="w-full">
                  {productos.map((producto) => (
                    <li key={producto.id} className="flex justify-between items-center border-b py-2">
                      <span>{producto.id}</span>
                      <span>{producto.descripcion}</span>
                      <button onClick={() => handleRemoveProduct(producto.id)} className="bg-red-500 text-white px-4 py-1 rounded-lg">
                        Remover
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/Admin/series/AgregarSeries/AgregarProducto" className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">
                +
              </Link>
            </div>
          </div>

          </section>
        </section>



        <section className="w-full">
          <BarraPaginacion />
        </section>
        <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">
          Guardar
        </button>
      </main>
    </div>
  );
}

export default AgregarSeries;
