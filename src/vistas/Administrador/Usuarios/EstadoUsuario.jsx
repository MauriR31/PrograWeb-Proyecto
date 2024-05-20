// import React, { useState } from "react";

// function EstadoUsuario({Pusuarios, paginaActual, usuariosPorPagina}) {
// const [usuarios, setUsuarios] = useState(Pusuarios);
// const [newUsuarios, setNewUsuarios] = useState('');

//     // Índice del primer usuario en la página actual
//     const indiceInicio = (paginaActual - 1) * usuariosPorPagina;
//     // Índice del último usuario en la página actual
//     const indiceFin = paginaActual * usuariosPorPagina;
//     // Usuarios a mostrar en la página actual
//     const usuariosEnPagina = usuarios.slice(indiceInicio, indiceFin);


//     // Función para cambiar el estado de un usuario
//     const cambiarEstadoUsuario = (id, nuevoEstado) => {
//         usuarios.forEach(usuario => {
//         if (usuario.id === id) {
//             usuario.estado = nuevoEstado;
//         }
//         });
//     };

//   return (
//     <section id="MURAListado" className="p-3.5 text-sm">
      
//       <article id="MURALCabecera" className="flex bg-gray-300 p-2">
//         <p className="flex-none w-12">ID</p>
//         <p className="flex-auto w-56">Nombre</p>
//         <p className="flex-auto w-56">Apellido</p>
//         <p className="flex-auto w-96">Correo</p>
//         <p className="flex-none w-28">Fecha Registro</p>
//         <p className="flex-none w-20">Estado</p>
//         <p className="flex-auto w-56">Acciones</p>
//       </article>
      
//       {usuariosEnPagina.map((usuario) => (
//         <article key={usuario.id} className="flex bg-white p-2">
//           <p className="flex-none w-12">{usuario.id}</p>
//           <p className="flex-auto w-56">{usuario.nombre}</p>
//           <p className="flex-auto w-56">{usuario.apellido}</p>
//           <p className="flex-auto w-96">{usuario.correo}</p>
//           <p className="flex-none w-28">{usuario.fechaRegistro}</p>
//           <p className="flex-none w-20">{usuario.estado}</p>

//           <p className="flex-auto w-56">
//             <button className="px-2 py-1 bg-blue-500 text-white rounded-md mr-2">Ver</button>
//             {usuario.estado === "Activo" ? (
//               <button
//                 onClick={() => cambiarEstadoUsuario(usuario.id, "Inactivo")}
//                 className="px-2 py-1 bg-red-500 text-white rounded-md">Desactivar</button>
//             ) : (
//               <button
//                 onClick={() => cambiarEstadoUsuario(usuario.id, "Activo")}
//                 className="px-2 py-1 bg-green-500 text-white rounded-md">Activar</button>
//             )}
//           </p>
//         </article>
//       ))}
//     </section>
//   );
// };

// export default EstadoUsuario;
