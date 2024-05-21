import React, { useState } from 'react';

function DatosRegistro() {
  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    correo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos({
      ...datos,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para guardar y actualizar los datos
    console.log("Nombre:", datos.nombre);
    console.log("Apellido:", datos.apellido);
    console.log("Correo:", datos.correo);
    // Lógica para enviar los datos y actualizar la información de registro
    // Por ahora, simplemente mostraremos los datos en la consola
    alert('Datos actualizados exitosamente.');
  };

  return (
    <div className="flex flex-col bg-gray-200">
      <main id="MainDatosRegistro" className="flex flex-col w-full">
        <section id="DRCabecera" className="p-4 bg-neutral-400">
          <h2 className="text-xl font-bold ">Datos de Registro</h2>
        </section>
        <div className="p-4">
          <form onSubmit={handleSubmit} className="w-full max-w-lg">
            <div className="mb-4">
              <input
                placeholder='Nombre'
                type="text"
                id="nombre"
                name="nombre"
                value={datos.nombre}
                onChange={handleChange}
                className="border border-gray-400 rounded-md w-full p-2"
                required
              />
            </div>
            <div className="mb-4">
              <input
                placeholder='Apellido'
                type="text"
                id="apellido"
                name="apellido"
                value={datos.apellido}
                onChange={handleChange}
                className="border border-gray-400 rounded-md w-full p-2"
                required
              />
            </div>
            <div className="mb-4">
             <input
                placeholder='Correo'
                type="email"
                id="correo"
                name="correo"
                value={datos.correo}
                onChange={handleChange}
                className="border border-gray-400 rounded-md w-full p-2"
                required
              />
            </div>
            <div className='pl-40 pr-0'>
            <button type="submit" className="bg-black text-white px-10 py-2 rounded-lg ">Actualizar</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default DatosRegistro;
