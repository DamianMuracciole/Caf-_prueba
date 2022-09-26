import React, {useState, useEffect} from "react";

function Products(){
    const cantPerPage = 3;
    const [products, setProducts]                     = useState([])
    const [productsByCategory, setProductsByCategory] = useState([])
    const [productsBySession, setProductsBySession]   = useState([])
    const [productsByStatus, setProductsByStatus]     = useState([])
    const [lastProduct, setLastProduct]               = useState([])
    const [pageNumber, setPageNumber]                 = useState(1)
    const [minProductNumber, setMinProductNumber]     = useState(0)
    const [maxProductNumber, setMaxProductNumber]     = useState((cantPerPage-1))
   

    useEffect(() => {
        //console.log('%cPasó por Products','color: orange');
        fetch('/api/products')
        .then(response => response.json())
        .then(data => {
            setProducts(data.productos);
            setLastProduct(data.productos[(data.productos.length -1)])
            setProductsByCategory(data.productsByCategory);
            setProductsBySession(data.productsBySession);
            setProductsByStatus(data.productsByStatus);
        })
        .catch(error => console.log(error));
    },[])

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
        <div className="row justify-content-evenly mt-4 ">
            
            <div className="card-cafeArte text-cafeArte bg-cafeArte mb-3 col-2 border-5" >
                <div className="card-header-cafeArte">Cantidad total de Productos</div>
                <div className="card-body-cafeArte ">
                    <h5 className="card-title">{products.length}</h5>
                </div>
            </div>
            <div className="card-cafeArte text-cafeArte bg-cafeArte mb-3 col-2 " >
                <div className="card-header-cafeArte">Total de Categorias</div>
                <div className="card-body-cafeArte ">
                    <h5 className="card-title">{productsByCategory.length}</h5>
                </div>
            </div>
            <div className="card-cafeArte text-cafeArte bg-cafeArte mb-3 col-2 " >
                <div className="card-header-cafeArte">Total de Sesiones</div>
                <div className="card-body-cafeArte ">
                    <h5 className="card-title">{productsBySession.length}</h5>
                </div>
            </div>

            <div className="card-cafeArte text-cafeArte bg-cafeArte mb-3 col-2 " >
                <div className="card-header-cafeArte">Total de Estados de productos</div>
                <div className="card-body-cafeArte ">
                    <h5 className="card-title">{productsByStatus.length}</h5>
                </div>
            </div>

        </div>

        <div className="row justify-content-evenly">
            <div className="card-cafeArte text-cafeArte bg-cafeArte mb-3 col-4">
                <div className="card-header-cafeArte">Último producto</div>
                <div>
                    <div className="card-body-cafeArte  ">{lastProduct.name}</div>
                    <div className="card-body-cafeArte ">{lastProduct.detail}</div>
                    <div className="card-body-cafeArte "> {lastProduct.category}</div>
                    <div className="card-body-cafeArte ">{lastProduct.price}</div>
                    <div className="card-body-cafeArte ">{lastProduct.quantity} unidades </div>
                    <img className="w-50 rounded-3 mb-3" src={lastProduct.image} alt='imagen del producto'></img>
                </div>
            </div>
        </div>    
        
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
                    { products.length > 0 ?
                    
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
    </div>
    )
}

export default Products