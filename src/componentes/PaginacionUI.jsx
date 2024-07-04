//Ojo este metodo de paginacion va a usar material ui como base
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ordRecientesApi from "../api/Main/OrdenesRecientes.js"
//tiene en cuenta el useContext
import { useDatos } from "../context/Datos.jsx"


function PaginacionUI() {
  const { id } =  useParams()
  console.log(id)
  const paginacion = useDatos()
  const[ordenes,setOrdenes] = useState([])
  

  const handleOnLoad = async () => {    
    const ordenesDatos = await ordRecientesApi.findAll();
    const filtrarOrdenes = ordenesDatos.filter(or => or.id_cliente == parseInt(id))
    setOrdenes(filtrarOrdenes)
    console.log(ordenes)
  }

  useEffect(() => {
   handleOnLoad();
  },[])

  const handleChange = (event, value) => {
    paginacion.setPage(value)
  }
  const filasxtabla = 4
  const numpage = CalcularPaginas()
    
  function CalcularPaginas(){ 
    if(ordenes.length >= filasxtabla){
      if(ordenes.length % filasxtabla == 1){
        return Math.round(ordenes.length / filasxtabla) + 1
      }
      else{
        return Math.round(ordenes.length / filasxtabla)
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