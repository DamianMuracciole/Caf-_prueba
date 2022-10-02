import React, {useState} from "react";

function ProductList ({products,loadingProducts}) {
  const cantPerPage = 3;
  const [pageNumber, setPageNumber]                 = useState(1)
  const [minProductNumber, setMinProductNumber]     = useState(0)
  const [maxProductNumber, setMaxProductNumber]     = useState((cantPerPage-1))
  
  const incPage = (cantidad) => {
      const pagesTotal = Math.trunc(cantidad / cantPerPage) + 1 ;
      let newPage;
      pageNumber + 1 > pagesTotal ? newPage = pagesTotal : newPage = pageNumber + 1;
      newPage < (pagesTotal) ? setPageNumber (newPage) : setPageNumber(pagesTotal);
      ((newPage -1) * cantPerPage + (cantPerPage-1)) > (cantidad-1) ? setMinProductNumber( ((newPage) -1) * cantPerPage) : setMinProductNumber( ((newPage) -1) * cantPerPage);
      ((newPage -1) * cantPerPage + (cantPerPage-1)) > (cantidad-1) ? setMaxProductNumber(cantidad-1) : setMaxProductNumber( (newPage -1) * cantPerPage + (cantPerPage-1));
  }

  const decPage = () => {
      let newPage;
      pageNumber - 1 > 1 ? newPage = pageNumber - 1 : newPage = 1;
      setPageNumber ( newPage )
      setMinProductNumber( (newPage -1) * cantPerPage);
      setMaxProductNumber( (newPage -1) * cantPerPage + (cantPerPage - 1));
  }

  return(
  <div>        
    { loadingProducts ?  <h3>Cargando .... </h3> : 
      <div className="container border-5 mt-5 mb-2"> 
          <h2>Todos los productos</h2>           
          <table className="table" id="dataTable" width="100%">
          <thead>
            <tr>
                <td className="w-10">Nombre</td>
                <td className="w-50">Detalle</td>
                <td className="w-10">Categoría</td>
                <td className="w-10">Precio</td>
                <td className="w-10">Cantidad</td>
                <td className="w-10">Url Imagen</td>
            </tr>
          </thead>
                  
          <tbody>
            { products && products.length > 0 ?
            
            products.slice(minProductNumber, maxProductNumber+1).map((products,index) => //.filter(product => (product.status === 'A' ))
              <tr key = {'0'* index}>
                <td key = {'1'+ index}>{products.name}</td>
                <td key = {'2'+ index} className='mh-100' >{products.detail}</td>
                <td key = {'3'+ index}>{products.category}</td>
                <td key = {'4'+ index}>{products.price}</td>
                <td key = {'5'+ index}>{products.quantity}</td>
                <td key = {'6'+ index}>
                  <img className="w-75" src={products.image} alt='imagen de producto' ></img>
                </td>
              </tr>
            )
            : <p>Cargando...</p>
            }
          </tbody>
        
        </table>

        <nav>
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <buttom className="page-link colores-nav" onClick={decPage} >Anterior</buttom>
            </li>

            <li className="page-item">
              <buttom className="page-link colores-num-nav">{pageNumber}</buttom>
            </li>

            {/* <li className="page-item">
              <buttom className="page-link">{pageNumber + 1}</buttom>
            </li>
            <li className="page-item">
              <buttom className="page-link">{pageNumber + 2}</buttom>
            </li> */}
            
            <li className="page-item">
              <buttom className="page-link colores-nav" onClick={()=>incPage(products.length)}> Siguiente </buttom>
            </li>
          </ul>
        </nav>

      </div>
    }
    </div>
    )
}

export default ProductList