const SeccionCategoria = () => {
    return (
      <>
<div className="flex" style={{ marginTop: '80px' , marginLeft:'210px'}} >
  <article className="mx-10 lg:mx-80 my-40"style={{ marginLeft: '230px' }}>
    <a href="#" className="block">
      <img src="https://dlcdnwebimgs.asus.com/gain/3DA4CB6F-9EE9-4262-8841-C17C8F530440/w250" alt="Magic The Gathering" className="w-250 h-auto transition duration-300 transform hover:scale-110" />
      <h2 className="text-xl font-semibold" style={{ maxWidth: '380px',alignContent:'center' }}>Magic The Gathering : Colección de Invierno Fase</h2>
    </a>
  </article>

  <div className="flex flex-col">
    <article className="mb-4">
      <a href="#" className="block">
        <img src="https://dlcdnwebimgs.asus.com/gain/3DA4CB6F-9EE9-4262-8841-C17C8F530440/w250" alt="GI JOE Classified Series" className="w-250 h-auto transition duration-300 transform hover:scale-110" />
        <h2 className="text-xl font-semibold"  style={{ maxWidth: '280px' ,alignContent:'center'}}>GI JOE Classified Series Big Boa, Airborne & More</h2>
      </a>
    </article>

    <article className="mb-4">
      <a href="#" className="block">
        <img src="https://dlcdnwebimgs.asus.com/gain/3DA4CB6F-9EE9-4262-8841-C17C8F530440/w250" alt="Spawn 30th Anniversary" className="w-250 h-auto transition duration-300 transform hover:scale-110" />
        <h2 className="text-xl font-semibold"  style={{ maxWidth: '280px' }}>Spawn 30th Anniversary</h2>
      </a>
    </article>
  </div>
</div>


  
        <div className="flex justify-center mt-8">
          <table className="table-auto">
            <tbody>
              <tr>
                <td className="px-20 py-8 text-center">
                  <a href="#">
                    <img src="https://dlcdnwebimgs.asus.com/gain/3DA4CB6F-9EE9-4262-8841-C17C8F530440/w250" alt="Imagen 1" className="w-56 h-auto transition duration-300 transform hover:scale-110" />
                  </a>
                  <h3 className="mt-4 text-base font-semibold">Nintendo Switch</h3>
                </td>
  
                <td className="px-20 py-8 text-center">
                  <a href="#">
                    <img src="https://dlcdnwebimgs.asus.com/gain/3DA4CB6F-9EE9-4262-8841-C17C8F530440/w250" alt="Imagen 2" className="w-56 h-auto transition duration-300 transform hover:scale-110" />
                  </a>
                  <h3 className="mt-4 text-base font-semibold">PS5</h3>
                </td>
  
                <td className="px-20 py-8 text-center">
                  <a href="#">
                    <img src="https://dlcdnwebimgs.asus.com/gain/3DA4CB6F-9EE9-4262-8841-C17C8F530440/w250" alt="Imagen 3" className="w-56 h-auto transition duration-300 transform hover:scale-110" />
                  </a>
                  <h3 className="mt-4 text-base font-semibold">RTX 4070</h3>
                </td>
  
                <td className="px-20 py-8 text-center">
                  <a href="#">
                    <img src="https://dlcdnwebimgs.asus.com/gain/3DA4CB6F-9EE9-4262-8841-C17C8F530440/w250" alt="Imagen 4" className="w-56 h-auto transition duration-300 transform hover:scale-110" />
                  </a>
                  <h3 className="mt-4 text-base font-semibold">RTX 4070</h3>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
  
  export default SeccionCategoria;
  