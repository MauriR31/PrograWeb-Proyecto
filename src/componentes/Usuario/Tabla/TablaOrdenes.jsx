import Button from '@mui/material/Button'
import RefreshIcon from '@mui/icons-material/Refresh'
import { common } from '@mui/material/colors'

import ordRecientesApi from "../../../api/Main/OrdenesRecientes.js"
import clienteDireccionApi from "../../../api/Direcciones/ClienteDireccion.js"
import departamentoApi from "../../../api/Direcciones/Departamento.js"
import distritoApi from "../../../api/Direcciones/Distrito.js"
import paisApi from "../../../api/Direcciones/Pais.js"
import provinciaApi from "../../../api/Direcciones/Provincia.js"
//Tabla de ordenes que se van a mostrar de 3 en 3 por cada pagina
import FilaOrdenes from "./FilaOrdenes";
//UseContext
import { useDatos } from "../../../context/Datos";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';


function TablaOrdenes() {  
  const { id } =  useParams()
  const datosPagina = useDatos()

  const[ordenes,setOrdenes] = useState([])
  const[direccion,setDireccion] = useState([])
  const[distrito,setDistrito] = useState([])
  const[provincia,setProvincia] = useState([])
  const[departamento,setDepartamento] = useState([])
  const[pais,setPais] = useState([])  

  const handleOnLoad = async () => {    
    const ordenesDatos = await ordRecientesApi.findAll();
    const filtrarOrdenes = ordenesDatos.filter(or => or.id_cliente == parseInt(id)) 

    //para cargar la direccion completa:
    const DatosDireccion = await clienteDireccionApi.findAll();
    const DatosDistrito = await distritoApi.findAll();
    const DatosProvincia= await provinciaApi.findAll();
    const DatosDepartamento = await departamentoApi.findAll();
    const DatosPais = await paisApi.findAll();

    setOrdenes(filtrarOrdenes)
    setDireccion(DatosDireccion)
    setDistrito(DatosDistrito)
    setProvincia(DatosProvincia)
    setDepartamento(DatosDepartamento)
    setPais(DatosPais)
  }

  useEffect(() => {
   handleOnLoad();
  },[])

  //Guarda el filtro de orden al refrescar
  const guardarOrden = () =>{
    const localStorageOrden = localStorage.getItem('ordenar')
    return localStorageOrden ? JSON.parse(localStorageOrden) : ''
  }  

  const [ordenar, setOrdenar] = useState(guardarOrden) 
    
  useEffect(() => {      
    localStorage.setItem('ordenar', JSON.stringify(ordenar))    
  },[ordenar])


  //Copia del arreglo original para no modificarlo
  const copia = ordenes.map(copy => copy)  

  function original(){
    copia.sort( (k1, k2) => {
      if (k1.id < k2.id) return -1     
    })       
  }  
  
  //Ordenar por fecha mas reciente
  function ascendente () {
    copia.sort( (f1, f2) => {
      if (f1.fecha < f2.fecha) return -1   
    })
  }
  //Ordenar por fecha mas antigua
  function descendente() {
    copia.sort( (f1, f2) => {
      if (f1.fecha > f2.fecha) return -1          
    })
  }  
  function handleOrdenar() {
    if(ordenar === ''){      
      setOrdenar('(mas antiguas primero) ↑')  
      ascendente() 
      setOrdenes(copia)   
    }
    else if(ordenar === '(mas antiguas primero) ↑') {      
      setOrdenar('(mas recientes primero) ↓')  
      descendente()     
      setOrdenes(copia) 
    }
    else{      
      setOrdenar('') 
      original()  
      setOrdenes(copia)     
    }
  }
  function handleClickActualizar (){   
    original()
    setOrdenes(copia)
    datosPagina.setPage(1)
    setOrdenar('')
  }
  const filasxtabla = 4
  const fin= datosPagina.page * filasxtabla
  const inicio = fin-filasxtabla
  const ordenesPagina = ordenes.slice(inicio,fin)  
  return(
    <> 
      <section className=" h-[31rem] bg-slate-50" >    
        <table className=" w-full ">
          <thead>
            <tr className="bg-[#0c2941]">
              <th className="text-white text-xl font-normal text-left p-2 pl-8 rounded-s">Ordenes Recientes
              <Button onClick={handleClickActualizar} startIcon={<RefreshIcon sx={{ color: '#fff' }}/>} /></th>              
              <th className="text-white text-xl font-normal text-right p-2 pr-8 rounded-e" 
              colSpan="2" onClick={handleOrdenar}><button className="hover:underline">Ordenar por fecha {ordenar}</button></th>
            </tr>
          </thead>
          <tbody >
          {              
            //Iterar sobre cada elemento del arreglo y llamando al componenete FilaOrdenes    
            ordenesPagina.map( (orden) => {
              const dir = direccion.find(d => d.id == orden.id_direccion)               
              const dist = distrito.find(dis => dis.id == dir.id_distrito)
              const pro = provincia.find(p => p.id == dist.id_provincia)
              const dep = departamento.find(dep => dep.id == pro.id_departamento)
              const pa = pais.find(pa => pa.id == dep.id_pais)
            return <FilaOrdenes key={orden.id} {...orden} dep={dep} pa={pa}/> })        
          }        
          </tbody>
        </table>  
      </section>        
    </>
  )
}
export default TablaOrdenes