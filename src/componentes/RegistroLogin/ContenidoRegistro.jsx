import "./ContenidoRegistroLogin.css"
function ContenidoRegistro() {
  return(
    <>
      <section className="inicio">
        <p>Registra una nueva cuenta</p>
        <input type="text" placeholder="Nombre"></input>
        <br/>
        <input type="text" placeholder="Apellido"></input>
        <br/>
        <input type="text" placeholder="Correo"></input>
        <br/>
        <input type="password" placeholder="Contraseña"></input>
        <br/>
        <input type="password" placeholder="Confirma Contraseña"></input>
        <button>Crear nueva cuenta</button>
      </section>      
    </>
  )
}
export default ContenidoRegistro