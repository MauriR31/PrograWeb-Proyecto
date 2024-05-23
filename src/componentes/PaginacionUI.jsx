//Ojo este metodo de paginacion va a usar material ui como base
//Por ahora solo funciona con la pagina main del usuario
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect } from 'react';
//tiene en cuenta el useContext
import { useDatos } from "../context/Datos.jsx"
function PaginacionUI() {

  const paginacion = useDatos()

  const handleChange = (event, value) => {
    paginacion.setPage(value)
  }
  const filasxtabla = 4
  const numpage = CalcularPaginas()
    
  function CalcularPaginas(){ 
    if(paginacion.datos.length >= filasxtabla){
      if(paginacion.datos.length % filasxtabla == 1){
        return Math.round(paginacion.datos.length / filasxtabla) + 1
      }
      else{
        return Math.round(paginacion.datos.length / filasxtabla)
      }
    }
    else{
      return 1
    }  
  }  

  return(
    <>
      <div className="flex flex-row-reverse pt-1">
        <Stack >        
          <Pagination count={numpage} 
            shape="rounded" size="large" color="primary" page={paginacion.page} onChange={handleChange} showFirstButton showLastButton 
          />
        </Stack>
      </div> 
    </>
  )
}
export default PaginacionUI