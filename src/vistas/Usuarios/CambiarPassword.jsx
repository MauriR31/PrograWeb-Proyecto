import React, { useState } from 'react';
import Menu from "../../componentes/Usuario/Menu.jsx"
import Footer from "../../componentes/Footer.jsx"
import HCerrarSesion from "../../componentes/Header/HCerrarSesion.jsx"

function CambiarPassword() {
  const [passwords, setPasswords] = useState({
    actual: '',
    nueva: '',
    repetir: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords({
      ...passwords,
      [name]: value,
    });
  };
  const guardarCambios = () => {
    window.location.href = '/usuarios/main/:id';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Contraseña actual:", passwords.actual);
    console.log("Nueva contraseña:", passwords.nueva);
    console.log("Repetir contraseña:", passwords.repetir);
 
    alert('Contraseña actualizada exitosamente.');
  };

  return (
    <div><HCerrarSesion/>
    <div className="flex justify-center py-4" style={{ backgroundColor:'#EEEEEE' }}>
      
    <Menu/><main id="MainCambiarPassword" className="flex flex-col max-w-6xl w-full">
      
      <section id="CPCabecera" className="p-3 bg-white rounded-lg mx-3">
          <h2 className="text-xl font-bold">Cambiar Password</h2>
        </section>
        <div className="p-4 pl-80">
          <form onSubmit={handleSubmit} className="w-full max-w-lg ">
            <div className="mb-4">
              <input
                placeholder='Actual'
                type="password"
                id="actual"
                name="actual"
                value={passwords.actual}
                onChange={handleChange}
                className="max-w-3xl w-full px-4 py-2 rounded-3xl border-slate-950 border-2 bg-white text-gray-800 focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <input
                placeholder='Nuevo'
                type="password"
                id="nueva"
                name="nueva"
                value={passwords.nueva}
                onChange={handleChange}
                className="max-w-3xl w-full px-4 py-2 rounded-3xl border-slate-950 border-2 bg-white text-gray-800 focus:outline-none"
                required
              />
            </div>
            <div className="mb-4 ">
              <input
                placeholder='Repetir'
                type="password"
                id="repetir"
                name="repetir"
                value={passwords.repetir}
                onChange={handleChange}
                className="max-w-3xl w-full px-4 py-2 rounded-3xl border-slate-950 border-2 bg-white text-gray-800 focus:outline-none"
                required
              />
            </div>
            <div className='pl-60'>
            <button onClick={guardarCambios} type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md flex-none w-30">Guardar</button>
            </div>
          </form>
        </div>
      </main>
      
    </div><Footer/>
    </div>
  );
}

export default CambiarPassword;
