//Ojo este metodo de paginacion va a usar material ui como base
//Por ahora solo funciona con la pagina main del usuario
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
//tiene en cuenta el useContext
import { useDatos } from "../context/Datos.jsx"
function PaginacionUI() {
  const paginacion = useDatos()

  const handleChange = (event, value) => {
    paginacion.setPage(value)
  }

  const numpage = CalcularPaginas()

  function CalcularPaginas(){ 
    if(paginacion.datos.length >= 3){
      if(paginacion.datos.length % 3 == 1){
        return Math.round(paginacion.datos.length / 3) + 1
      }
      else{
        return Math.round(paginacion.datos.length / 3)
      }
    }
    else{
      return 1
    }  
  }  

  return(
    <>
      <div className="flex flex-row-reverse">
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