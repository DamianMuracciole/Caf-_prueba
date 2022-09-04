import React, {useState, useEffect} from "react";

function Products(){
    const [products, setProducts]                     = useState([])
    const [productsByCategory, setProductsByCategory] = useState([])
    const [productsBySession, setProductsBySession]   = useState([])
    const [productsByStatus, setProductsByStatus]     = useState([])
    const [lastProduct, setLastProduct] = useState([])

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
            console.log(lastProduct);
        })
        .catch(error => console.log(error));
    },[])


    return(
    <div>
        <div className="row justify-content-evenly mt-4 ">
            <h2></h2>
            <div className="card text-white bg-secondary mb-3 col-2 border-5" >
                <div className="card-header">Cantidad total de Productos</div>
                <div className="card-body">
                    <h5 className="card-title">{products.length}</h5>
                </div>
            </div>
            <div className="card text-white bg-secondary mb-3 col-2 " >
                <div className="card-header">Total de Categorias de productos</div>
                <div className="card-body">
                    <h5 className="card-title">{productsByCategory.length}</h5>
                </div>
            </div>
            <div className="card text-white bg-secondary mb-3 col-2 " >
                <div className="card-header">Total de Sesiones de productos</div>
                <div className="card-body">
                    <h5 className="card-title">{productsBySession.length}</h5>
                </div>
            </div>

            <div className="card text-white bg-secondary mb-3 col-2 " >
                <div className="card-header">Total de Estados de productos</div>
                <div className="card-body">
                    <h5 className="card-title">{productsByStatus.length}</h5>
                </div>
            </div>

        </div>

        <div className="row justify-content-evenly">
            <div className="card text-white bg-secondary mb-3 col-4">
                <div className="card-header">Último producto</div>
                <div>
                    <div className="card-body ">{lastProduct.name}</div>
                    <div className="card-body">{lastProduct.detail}</div>
                    <div className="card-body"> {lastProduct.category}</div>
                    <div className="card-body">{lastProduct.price}</div>
                    <div className="card-body">{lastProduct.quantity} unidades </div>
                    <img className="w-25 rounded-3 mb-3 " src={lastProduct.image}></img>
                </div>
            </div>
        </div>    
        
        <div className="container border-5 mt-5 mb-2"> 
            <h2>Todos los productos</h2>           
            <table className="table" id="dataTable" width="100%">
				<thead>
                    <tr>
                        <td>Nombre</td>
                        <td>Detalle</td>
                        <td>Categoría</td>
                        <td>Precio</td>
                        <td>Cantidad</td>
                        <td>Url Imagen</td>
                    </tr>
				</thead>
                    
				<tbody>
                    {products.filter(product => product.status === 'A').map((products,index) => 
                        <tr key = {'0'* index}>
                            <td key = {'1'+ index}>{products.name}</td>
                            <td key = {'2'+ index}>{products.detail}</td>
                            <td key = {'3'+ index}>{products.category}</td>
                            <td key = {'4'+ index}>{products.price}</td>
                            <td key = {'5'+ index}>{products.quantity}</td>
                            <td key = {'6'+ index}>
                                <img className="w-25" src={products.image}></img>
                            </td>
                        </tr>
                    )}
				</tbody>
			</table>
        </div>
    </div>
    )
}

export default Products