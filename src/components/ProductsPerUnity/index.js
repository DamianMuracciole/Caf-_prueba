import React from "react";

function ProductsPerUnity ({products,loadingProducts}) {

  let lastProduct = [];
  
  if(products) {
    lastProduct = products[products.length -1];
  }

  

  return(
  <div>
    { loadingProducts && products !== 0 ?  <h3>Cargando .... </h3> : 
      <div className="row justify-content-evenly">
        <div className="card-cafeArte text-cafeArte bg-cafeArte mb-3 col-6">
          <div className="card-header-cafeArte">Último producto</div>
          <div>
            <div className="card-body-cafeArte  ">{lastProduct.name}</div>
            <div className="card-body-cafeArte ">{lastProduct.detail}</div>
            <div className="card-body-cafeArte "> {lastProduct.category}</div>
            <div className="card-body-cafeArte ">{lastProduct.price}</div>
            <div className="card-body-cafeArte ">{lastProduct.quantity} unidades </div>
            <img className="w-25 rounded-3 mb-3" src={lastProduct.image} alt='imagen del producto'></img>
          </div>
        </div>
      </div> 
    }   
  </div>
  )
}

export default ProductsPerUnity