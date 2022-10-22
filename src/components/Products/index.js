import Graphics from '../Graphics'
import Graphics2 from '../Graphics2'

function Products ({products, loadingProducts}) {
  return(
    <>
    {loadingProducts && 
      <>
        <h3>Cargando .... </h3>
      </>
    }
    {!loadingProducts && products &&
      <>
        <div className="row justify-content-evenly mt-4 ">
            
          <div className="card-cafeArte text-cafeArte bg-cafeArte mb-3 col-2 border-5" >
            <div className="card-header-cafeArte">Cantidad total de productos</div>
            <div className="card-body-cafeArte ">
              <h5 className="card-title">{products.total}</h5>
            </div>
          </div>
          <div className="card-cafeArte text-cafeArte bg-cafeArte mb-3 col-2 " >
            <div className="card-header-cafeArte">Categorias de productos</div>
            <div className="card-body-cafeArte ">
              <h5 className="card-title">{products.productsByCategory.length}</h5>
            </div>
          </div>
          <div className="card-cafeArte text-cafeArte bg-cafeArte mb-3 col-2 " >
            <div className="card-header-cafeArte">Sesiones de productos</div>
            <div className="card-body-cafeArte ">
              <h5 className="card-title">{products.productsBySession.length}</h5>
            </div>
          </div>
          <div className="card-cafeArte text-cafeArte bg-cafeArte mb-3 col-2 " >
            <div className="card-header-cafeArte">Estados de productos</div>
            <div className="card-body-cafeArte ">
              <h5 className="card-title">{products.productsByStatus.length}</h5>
            </div>
          </div>
          
        </div>

        <div className="row">
          <div className="col-4" />
          <div className="col-4" >
            <Graphics 
              title = "Por categoria"
              total = {products.total}
              datos = {products.productsByCategory}
              key = '1'
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4" />
          <div className="col-4" >
            <Graphics2 
              title = "Por Sesiones"
              total = {products.total}
              datos = {products.productsBySession}
              key = '2'
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4" />
          <div className="col-4" >
            <Graphics2 
              title = "Por Estado"
              total = {products.total}
              datos = {products.productsByStatus}
              key = '2'
            />
          </div>
        </div>


      </>
    }
    </>
  )
}

export default Products