import { Link } from "react-router-dom"
import { useFormulario } from "../../context/Formulario"
import ErrorLogin from "./ErrorLogin"

function ContenidoRecuperar() {
  const formulario = useFormulario()
  function handleClickRecuperar () {
    //Mensaje de recepcion
    if(formulario.correo != '')
    {      
      formulario.setMensajeError('')
      alert("Restauracion de contraseña enviada al correo: ("+ formulario.correo + ") ,revise su correo por favor")      
      formulario.setCorreo('')
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