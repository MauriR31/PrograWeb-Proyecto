import React from 'react';

const HCerrarSesion = () => {
  return (
    <>
     
     <header className="bg-gray-200 text-black shadow-md">
    <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <nav className="MenuCabecera">
            <a href="#">
                <h1 className="text-2xl font-bold text-black">TIENDA</h1>
            </a>
        </nav>

       

        <nav className="ml-0 lg:ml-auto flex items-center">
    
    <div className="help hidden lg:block mr-8">
        <a href="#" className="text-gray-600 hover:text-gray-800">Cerrar Sersion</a>
    </div>

</nav>

    </div>
</header>




    </>
  );
}

export default HCerrarSesion;
