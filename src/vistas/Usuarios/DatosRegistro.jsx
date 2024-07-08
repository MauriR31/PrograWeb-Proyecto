import React, { useState } from 'react';

function CambiarDatos() {
  const [datos, setdatos] = useState({
    Nombre: '',
    Apellido: '',
    Correo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdatos({
      ...datos,
      [name]: value,
    });
  };
  const guardarCambios = () => {
    window.location.href = '/usuarios/main/:id';
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Nombre:", datos.Nombre);
    console.log("Apellido:", datos.Apellido);
    console.log("Correo:", datos.Correo);
    // Lógica para enviar los datos y actualizar la contraseña
   
    alert('Datos actualizados.');
  };

  return (
    <div className="flex justify-center py-4" style={{ backgroundColor:'#EEEEEE' }}>
      <main id="MainCambiarPassword" className="flex flex-col max-w-6xl w-full">
        <section id="CPCabecera" className="p-3 bg-white rounded-lg mx-3">
          <h2 className="text-xl font-bold">DATOS REGISTRO</h2>
        </section>
        <div className="p-4 pl-80">
          <form onSubmit={handleSubmit} className="w-full max-w-lg ">
            <div className="mb-4">
              <input
                placeholder='Nombre'
                type='text'
                id="Nombre"
                name="Nombre"
                value={datos.Nombre}
                onChange={handleChange}
                className="max-w-3xl w-full px-4 py-2 rounded-3xl border-slate-950 border-2 bg-white text-gray-800 focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <input
                placeholder='Apellido'
                type="password"
                id="Apellido"
                name="Apellido"
                value={datos.Apellido}
                onChange={handleChange}
                className="max-w-3xl w-full px-4 py-2 rounded-3xl border-slate-950 border-2 bg-white text-gray-800 focus:outline-none"
                required
              />
            </div>
            <div className="mb-4 ">
              <input
                placeholder='Correo'
                type="text"
                id="Correo"
                name="Correo"
                value={datos.Correo}
                onChange={handleChange}
                className="max-w-3xl w-full px-4 py-2 rounded-3xl border-slate-950 border-2 bg-white text-gray-800 focus:outline-none"
                required
              />
            </div>
            <div className='pl-60'>
            <button onClick={guardarCambios} type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md flex-none w-30"><link rel="stylesheet"  />Guardar</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default CambiarDatos;
