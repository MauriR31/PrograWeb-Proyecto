{/* Tercera seccion */}
          <section className="p-3 pl-5 bg-white rounded-lg mx-3 mb-2">
            <p className="text-xl font-bold">Órdenes recientes</p>
          </section>

          {/* Cuarta seccion */}
          <section className="px-3 text-sm">
            {/* Cabecera de la lista de usuarios registrados */}
            <article className="flex font-bold text-base bg-green-200 p-2 items-center mb-2 px-4">
              <p className="w-[13%]">ID</p>
              <p className="w-[16%]">Fecha Orden</p>
              <p className="w-[12%]">Total</p>
              <p className="w-5/12">Productos</p>
              <p className="w-[18%]">Estado</p>
              <p className="w-1/12">Acciones</p>
            </article >
            {/* Cuerpo de la lista de usuarios registrados */}
            <div className='grid grid-cols-1 grid-rows-10'>
             {ultimas10Ordenes.map((orden) => (
                <article key={orden.id} className="flex bg-white py-2 px-4 hover:bg-slate-100 items-center mb-1 rounded-md">
                  <p className="w-[13%]">{orden.numero}</p>
                  <p className="w-[16%]">{orden.fecha}</p>
                  <p className="w-[12%]">S/{orden.total.toFixed(2)}</p>
                  <p className="w-5/12">{productos
                    .filter(producto => producto.orden_id === orden.id)
                    .map(producto => producto.id)
                    .join(', ')}
                  </p>
                  <p className="w-[18%]">{orden.estado}
                    <BarraPedidoEstado  estado={orden.estado} />
                  </p>
                  <Link
                    to={`/Admin/OrdenLog/Detail/${orden.numero}`}
                    class="w-1/12 flex justify-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <View_SVG width="24px" height="24px" fill="LightGreen" />
                  </Link>
                </article>
              ))}
            </div>
            
          </section>