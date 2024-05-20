import ErrorLogin from "./ErrorLogin"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function ContenidoLogin() {
  const [mensajeIncorrecto, setmensajeIncorrecto] = useState("")
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  function Verificar () {
    if( user === "uno" && password === "123"){
      navigate("/MainUsuario")
    }
    else{      
      setmensajeIncorrecto(<ErrorLogin />)               
    }
  }
  return(
    <>
      <section className="flex flex-col items-center justify-center h-[35rem]  bg-slate-100">
        <p className="mb-7">Ingreso para clientes registrados</p>        
        <input type="text" placeholder="Correo" value={ user } onChange={u => setUser(u.target.value)}
          className="w-[21.875rem] h-12 rounded-md border-2 border-gray-500 hover:border-red-600"></input>
        <br/>
        <input type="password" placeholder="Contraseña" value={ password } onChange={p => setPassword(p.target.value)}
          className="w-[21.875rem] h-12 rounded-md border-2 border-gray-500 hover:border-red-600"   ></input> 
        {mensajeIncorrecto}
        <button onClick={Verificar}
          className=" m-9 w-64 h-12 bg-black text-white rounded-md border-2 border-gray-500 hover:bg-white hover:text-black">Ingresar</button>               
        <a href="/RecuperarPassword">Olvide mi contraseña</a>
        <a href="/Registrarse">No tengo cuenta, deseo registrarme</a>
      </section>  
    </>
  )
}
export default ContenidoLogin