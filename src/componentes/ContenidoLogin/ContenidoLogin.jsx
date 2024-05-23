import ErrorLogin from "./ErrorLogin.jsx"

import { Link, useNavigate } from "react-router-dom"
import { useFormulario } from "../../context/Formulario.jsx"
function ContenidoLogin() {
  
  const navigate = useNavigate()
  const formulario = useFormulario()

  function Verificar () {
    if( formulario.correo === "user" && formulario.password === "user"){
      formulario.setMensajeError('')
      formulario.setCorreo('')
      formulario.setPassword('')
      navigate("/usuarios/main")
    }
    else if( formulario.correo === "admin" && formulario.password === "admin") {
      formulario.setMensajeError('')
      formulario.setCorreo('')
      formulario.setMensajeError('')
      navigate("/dashboard")
    }
    else{      
      formulario.setMensajeError(<ErrorLogin />)               
    }
  }

  function handleClickOpciones() {
    formulario.setCorreo('')
    formulario.setPassword('')
    formulario.setMensajeError('')
  }
  return(
    <>    
      <section className="flex flex-col items-center justify-center h-[41.125rem] bg-slate-100">
        <p className="mb-7">Ingreso para clientes registrados</p>        
        <input type="text" placeholder="Correo" value={ formulario.correo } onChange={u => formulario.setCorreo(u.target.value)}
          className="w-[21.875rem] h-12 rounded-md border-s-4 border-e-4 border-y border-gray-500 hover:border-blue-700"></input>
        <br/>
        <input type="password" placeholder="Contraseña" value={ formulario.password } onChange={p => formulario.setPassword(p.target.value)}
          className="w-[21.875rem] h-12 rounded-md border-s-4 border-e-4 border-y border-gray-500 hover:border-blue-700"   ></input> 
        {formulario.mensajeError}
        <button onClick={Verificar}
          className=" m-4 w-64 h-12  bg-[#0c2941] text-white rounded-md border-2 border-gray-500 hover:bg-white hover:text-black">Ingresar</button>               
        <Link onClick={handleClickOpciones}
        className="mb-2 hover:underline hover:text-red-600" 
          to="/recuperarPassword">Olvide mi contraseña</Link>
        <Link onClick={handleClickOpciones} 
          className="hover:underline hover:text-red-600" 
          to="/registro">No tengo cuenta, deseo registrarme</Link>
      </section>  
    </>
  )
}
export default ContenidoLogin