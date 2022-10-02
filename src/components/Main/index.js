export default function Main({cantidadProductos,cantidadUsuarios,loadingProducts,loadingUsers}) {

  if (loadingProducts || loadingUsers){
    return <div> Cargando datos... </div>
  }

    return (
        <div className="row justify-content-evenly mt-4 ">
            <div className="card-cafeArte  text-cafeArte bg-cafeArte mb-3 col-2 border-5 shadow-card" >
                <div className="card-header-cafeArte">Cantidad de  <br /> Productos</div>
                <div className="card-body-cafeArte">
                    <h5 className="card-title"> {cantidadProductos} </h5>
                </div>
            </div>
            <div className="card-cafeArte  text-cafeArte bg-cafeArte mb-3 col-2 shadow-card" >
                <div className="card-header-cafeArte">Total de <br /> Usuarios</div>
                <div className="card-body-cafeArte">
                    <h5 className="card-title">{cantidadUsuarios}</h5>
                </div>
            </div>
        </div>
    )
}