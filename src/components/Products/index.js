import React, {useState, useEffect} from "react";

function Products(){
    const [products, setProducts]                     = useState([])
    const [productsByCategory, setProductsByCategory] = useState([])
    const [productsBySession, setProductsBySession]   = useState([])
    const [productsByStatus, setProductsByStatus]     = useState([])
    const [lastProduct, setLastProduct] = useState([])

    useEffect(() => {
        console.log('%cPasó por Products','color: orange');
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
            <h2>Cantidad total de Productos</h2>
            <p>{products.length}</p>
            <br />
            <hr />
            <h2>Total de Categorias de productos</h2>
            <p>{productsByCategory.length}</p>
            <hr />
            <h2>Total de Sesiones de productos</h2>
            <p>{productsBySession.length}</p>
            <hr />
            <h2>Total de Estados de productos</h2>
            <p>{productsByStatus.length}</p>
            <hr />
            <h2>Último producto</h2>
                <p>Nombre: {lastProduct.name}</p>
                <p>Detalle: {lastProduct.detail}</p>
                <p>Categoría: {lastProduct.category}</p>
                <p>Precio: $ {lastProduct.price}</p>
                <p>Cantidad: {lastProduct.quantity} unidades</p>
                <img class="w-100" src={lastProduct.image}></img>
            <hr />
            <h2>Todos los productos</h2>
                     
            <table className="table-bordered" id="dataTable" width="100%">
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
                                <img class="w-25" src={products.image}></img>
                            </td>
                        </tr>
                    )}
				</tbody>
			</table>

        </div>
    )
}

export default Products