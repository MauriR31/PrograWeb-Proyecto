import FilaOrdenes from "./FilaOrdenes"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "./MainUsuario.css"
import { useState } from "react";




function ListadoOrdenes() {
  const ordenes = [
    {
      items: "x3",
      fecha: "12 de octubre del 2024",
      destino: "Lima",
      numeroOrden: "121321421",      
    },
    {
      items: "x4",
      fecha: "12 de febrero del 2024",
      destino: "Lima",
      numeroOrden: "127688621",      
    },
    {
      items: "x4",
      fecha: "15 de octubre del 2024",
      destino: "Ica",
      numeroOrden: "121241412",      
    },
    {
      items: "x4",
      fecha: "15 de octubre del 2024",
      destino: "Ica",
      numeroOrden: "121241412",      
    },
    {
      items: "x9",
      fecha: "15 de octubre del 2024",
      destino: "Ica",
      numeroOrden: "121241412",      
    },
    {
      items: "x11",
      fecha: "15 de octubre del 2024",
      destino: "Ica",
      numeroOrden: "121241412",      
    },
    {
      items: "x13",
      fecha: "15 de octubre del 2024",
      destino: "Ica",
      numeroOrden: "121241412",      
    },


  ]

  const [page,setPage] = useState(1)

  const handleChange = (event, value) => {
    setPage(value)
  }

  const numpage = CalcularPaginas()

  function CalcularPaginas(){ 
    if(ordenes.length >= 3){
      if(ordenes.length % 3 == 1){
        return Math.round(ordenes.length / 3) + 1
      }
      else{
        return Math.round(ordenes.length / 3)
      }
    }
    else{
      return 1
    }  
  }  
  
  const fin= page * 3
  const inicio = fin-3

  const ordenesPagina = ordenes.slice(inicio,fin)
 

  

  return(
    <>    
    <section id="Ordenes">
      <table>
        <thead>
          <th className="LadoIzq">Ordenes Recientes</th>
          <th className="LadoDer" colSpan="2">Ordenar por fecha (mas antiguas primero)</th>
        </thead>
        <tbody>
        {
          ordenesPagina.map( (orden) => <FilaOrdenes  { ...orden } /> )          
        }        
        </tbody>
      </table>
      <div className="barraPag">
          <Stack >        
            <Pagination count={numpage} 
              shape="rounded" size="large" color="primary" page={page} onChange={handleChange} showFirstButton showLastButton 
            />
          </Stack>
        </div>            
    </section>    
    </>
  )
}
export default ListadoOrdenes