function Footer() {
  return(
    <>
      <footer className="flex bg-gray-200 h-80">
        <span className="mr-auto ml-auto mt-20">
          <ol className="list-none">
            <li className="text-2xl font-bold mb-6">LA TIENDA</li>
            <li className="mb-4 text-xs">@2024</li>
            <li className="mb-4 text-xs">Privacy-Terms</li>
          </ol>
        </span>
        <span className="mr-auto ml-auto mt-20">
          <ol className="list-none">
            <li className="font-bold mb-6 ">Cuenta</li>
            <li className="mb-4 text-xs">Login</li>
            <li className="mb-4 text-xs">Registro</li>
            <li className="mb-4 text-xs">Carrito</li>
          </ol>
        </span >
        <span className="mr-auto ml-auto mt-20">
          <ol className="list-none"> 
            <li className="font-bold mb-6">Productos</li>
            <li className="mb-4 text-xs">Mas Vendidos</li>
            <li className="mb-4 text-xs">Nuevos</li>
            <li className="mb-4 text-xs">Ofertas</li>
          </ol>
        </span>
        <span className="mr-auto ml-auto mt-20">
          <ol className="list-none">
            <li className="font-bold mb-6">Ayuda</li>
            <li className="mb-4 text-xs">Acerca de nosotros</li>
            <li className="mb-4 text-xs">Politica de Envio</li>
            <li className="mb-4 text-xs">FAQ</li>
          </ol>
        </span>   
        <span className="flex mr-auto ml-auto mt-20" >
          <img src="../src/assets/facebook.PNG" className="w-12 h-12  mr-4 rounded-xl"></img>
          <img src="../src/assets/instagram.PNG" className="w-12 h-12  mr-4 rounded-xl"></img>
          <img src="../src/assets/twitter.PNG" className="w-12 h-12  mr-4 rounded-xl"></img>
          <img src="../src/assets/whatsapp.PNG" className="w-12 h-12  mr-4 rounded-xl"></img>
        </span>     
      </footer>
    </>
  )
}
export default Footer