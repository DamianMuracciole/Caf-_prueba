function Products ({cantidadProductos, totalCategory,totalSessions,totalStatus,loadingProducts}) {
  return(
    <div>
      { loadingProducts ?  <h3>Cargando .... </h3> : 
        <div className="row justify-content-evenly mt-4 ">
            
          <div className="card-cafeArte text-cafeArte bg-cafeArte mb-3 col-2 border-5" >
            <div className="card-header-cafeArte">Cantidad total de Productos</div>
            <div className="card-body-cafeArte ">
              <h5 className="card-title">{cantidadProductos}</h5>
            </div>
          </div>
          <div className="card-cafeArte text-cafeArte bg-cafeArte mb-3 col-2 " >
            <div className="card-header-cafeArte">Total de Categorias</div>
            <div className="card-body-cafeArte ">
              <h5 className="card-title">{totalCategory}</h5>
            </div>
          </div>
          <div className="card-cafeArte text-cafeArte bg-cafeArte mb-3 col-2 " >
            <div className="card-header-cafeArte">Total de Sesiones</div>
            <div className="card-body-cafeArte ">
              <h5 className="card-title">{totalSessions}</h5>
            </div>
          </div>

          <div className="card-cafeArte text-cafeArte bg-cafeArte mb-3 col-2 " >
            <div className="card-header-cafeArte">Total de Estados de productos</div>
            <div className="card-body-cafeArte ">
              <h5 className="card-title">{totalStatus}</h5>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Products