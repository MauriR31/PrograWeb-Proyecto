import { useNavigate } from "react-router-dom"
import "./ContenidoRegistroLogin.css"
function ContenidoRegistro() {
  const navigate = useNavigate()
  function handleClickForm() {
    navigate("/MainUsuario")
  }
  return(
    <>
      <section className="flex flex-col items-center justify-center h-[35rem]  bg-slate-100">
        <p className="mb-7">Registra una nueva cuenta</p>
        <input type="text" placeholder="Nombre"
          className="w-[21.875rem] h-12 rounded-md border-s-4 border-e-4 border-y border-gray-500 hover:border-blue-700"></input>
        <br/>
        <input type="text" placeholder="Apellido"
          className="w-[21.875rem] h-12 rounded-md border-s-4 border-e-4 border-y border-gray-500 hover:border-blue-700"></input>
        <br/>
        <input type="text" placeholder="Correo"
          className="w-[21.875rem] h-12 rounded-md border-s-4 border-e-4 border-y border-gray-500 hover:border-blue-700"></input>
        <br/>
        <input type="password" placeholder="Contraseña"
          className="w-[21.875rem] h-12 rounded-md border-s-4 border-e-4 border-y border-gray-500 hover:border-blue-700"></input>
        <br/>
        <input type="password" placeholder="Confirma Contraseña"
          className="w-[21.875rem] h-12 rounded-md border-s-4 border-e-4 border-y border-gray-500 hover:border-blue-700"></input>
        <button onClick={handleClickForm}
          className="m-4 w-64 h-12 bg-black text-white rounded-md border-2 border-gray-500 hover:bg-white hover:text-black">Crear nueva cuenta</button>
      </section>      
    </>
  )
}
export default ContenidoRegistro