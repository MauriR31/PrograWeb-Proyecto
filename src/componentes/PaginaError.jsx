import React from 'react'

import { Link } from 'react-router-dom'
function PaginaError() {
  return (
    <div>
        <h3>pagina no encontrada, por favor verifica el enlace de nuevo</h3>
        <p>
          Ir a la
          <Link to="/"> Pagina Principal</Link>
        </p>
    </div>
  )
}

// Ambos funcionan de la misma manera, solo con diferente direccionador
// function PaginaError() {
//   return (
//     <div>
//         <h3>pagina no encontrada, por favor verifica el enlace de nuevo</h3>
//         <p>
//           <a href="/">Pagina Principal</a>
//         </p>
//     </div>
//   )
// }

export default PaginaError