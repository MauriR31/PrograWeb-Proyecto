import { Link } from "react-router-dom"
import { useFormulario } from "../../context/Formulario"
import ErrorLogin from "./ErrorLogin"
import loginApi from "../../api/Login/login.js"
import { useEffect, useState } from "react"

function ContenidoRecuperar() {
  const formulario = useFormulario()
  const [usuarios,setUsuarios] = useState([])

  //Carga de datos de usuarios que existen
  const handleOnLoad = async () => {
    const usuariosData = await loginApi.findAll();
    setUsuarios(usuariosData)    
  }

  useEffect(() => {
    handleOnLoad();
  }, [formulario])

  function handleClickRecuperar () {
    const buscarUsuario = usuarios.filter(u => u.correo == formulario.correo); 
    const buscarAdmin = usuarios.filter(u => u.correo == formulario.correo); 
    //Mensaje de recepcion
    if(buscarUsuario.length === 1)
    {     
      formulario.setMensajeError('')       
      formulario.setCorreo('')
      alert("señor(a): "+buscarUsuario[0].nombre+" se te ha enviado un correo para reestablecer tu contraseña")     
    }
    else if(buscarAdmin.length === 1)
    {     
      formulario.setMensajeError('')           
      formulario.setCorreo('')
      alert("señor(a): "+buscarAdmin[0].nombre+" se te ha enviado un correo para reestablecer tu contraseña") 
    }
    else{
      formulario.setMensajeError(<ErrorLogin/>)
    }  
  }
  function handleClickRegresar () {
    formulario.setMensajeError('')
    formulario.setCorreo('')
  }
  return(
    <>
      <section className="flex flex-col items-center justify-center h-[41.125rem]  bg-slate-100">
        <p className="mb-7">Ingrese su correo para enviar contraseña</p>
        <input type="text" placeholder="Correo" value={formulario.correo} onChange={mail => formulario.setCorreo(mail.target.value)} 
          className="w-[21.875rem] h-12 rounded-md border-s-4 border-e-4 border-y border-gray-500 hover:border-blue-700"></input> 
        {formulario.mensajeError}       
        <button onClick={handleClickRecuperar}        
          className="m-4 w-64 h-12 bg-[#0c2941] text-white rounded-md border-2 border-gray-500 hover:bg-white hover:text-black">Enviar</button>
        <Link onClick={handleClickRegresar} 
          className="hover:underline hover:text-red-600" 
          to="/login">Regresar a Login</Link>
      </section>      
    </>
  )
}
export default ContenidoRecuperar