import React, { useState } from 'react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para guardar y actualizar las contraseñas
    console.log("Contraseña actual:", passwords.actual);
    console.log("Nueva contraseña:", passwords.nueva);
    console.log("Repetir contraseña:", passwords.repetir);
    // Lógica para enviar los datos y actualizar la contraseña
    // Por ahora, simplemente mostraremos los datos en la consola
    alert('Contraseña actualizada exitosamente.');
  };

  return (
    <div className="flex flex-col bg-gray-200">
      <main id="MainCambiarPassword" className="flex flex-col w-full">
        <section id="CPCabecera" className="p-4 bg-neutral-400">
          <h2 className="text-xl font-bold">Cambiar Password</h2>
        </section>
        <div className="p-4">
          <form onSubmit={handleSubmit} className="w-full max-w-lg">
            <div className="mb-4">
              <input
                placeholder='Actual'
                type="password"
                id="actual"
                name="actual"
                value={passwords.actual}
                onChange={handleChange}
                className="border border-gray-400 rounded-md w-full p-2"
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
                className="border border-gray-400 rounded-md w-full p-2"
                required
              />
            </div>
            <div className="mb-4">
              <input
                placeholder='Repetir'
                type="password"
                id="repetir"
                name="repetir"
                value={passwords.repetir}
                onChange={handleChange}
                className="border border-gray-400 rounded-md w-full p-2"
                required
              />
            </div>
            <div className='pl-40'>
            <button type="submit" className="bg-black text-white px-4 py-2 rounded-lg">Guardar</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default CambiarPassword;
