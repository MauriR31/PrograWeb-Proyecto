// No olvidar hacer la funcionalidad de error en las credenciales

import Footer from "../../componentes/Footer/Footer.jsx"
import Header from "../../componentes/Header/Header.jsx"
import ContenidoLogin from "../../componentes/RegistroLogin/ContenidoLogin.jsx"


function Login(){  
  
  return(
    <>
      <Header />
      <ContenidoLogin />        
      <Footer />      
    </>
  )
}
export default Login