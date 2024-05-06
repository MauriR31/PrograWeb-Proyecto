import React from 'react'

function BarraNavegacion() {
  return (
    <div>
        <span>TIENDA</span>
        <span>Mas vendidos</span>
        <span>Nuevos</span>
        <span>Ofertas</span>
        {/* Esta parte la estoy poniendo provisional, evidentemente el acceso a esto es distinto */}
        <span style={{marginLeft:10}}>Administrador</span>
    </div>
  )
}

export default BarraNavegacion