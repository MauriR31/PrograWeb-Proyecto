import { Link } from "react-router-dom"
function ContenidoRecuperar() {
  return(
    <>
      <section className="flex flex-col items-center justify-center h-[41.125rem]  bg-slate-100">
        <p className="mb-7">Ingrese su correo para enviar contraseña</p>
        <input type="text" placeholder="Correo"
          className="w-[21.875rem] h-12 rounded-md border-s-4 border-e-4 border-y border-gray-500 hover:border-blue-700"></input>        
        <button className="m-4 w-64 h-12 bg-black text-white rounded-md border-2 border-gray-500 hover:bg-white hover:text-black">Enviar</button>
        <Link className="hover:underline hover:text-red-600" 
          to="/login">Regresar a Login</Link>
      </section>      
    </>
  )
}
export default ContenidoRecuperar