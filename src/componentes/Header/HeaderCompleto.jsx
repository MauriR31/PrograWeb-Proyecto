function Header() {
  return (
    <header className="p-2 bg-white shadow flex">
      <span className="justify-center items-center w-1/2">
        <h1 className="text-xl font-bold">TIENDA</h1>
      </span>
      <span className="justify-center items-center w-1/2">
        <h2>Mas Vendidos</h2>
      </span>
      <span className="justify-center items-center w-1/2">
        <h2>Nuevos</h2>
      </span>
      <span className="justify-center items-center w-1/2">
        <h2>Ofertas</h2>
      </span>
      <span className="ml-auto justify-center items-center w-1/2">
        <h2>Carrito</h2>
      </span>
      <span className="justify-center items-center w-1/2">
        <h2>Ayuda</h2>
      </span>
      <span className="justify-center items-center w-1/2">
        <h2>Mi Cuenta</h2>
      </span>
    </header>
  );
}

export default Header;
