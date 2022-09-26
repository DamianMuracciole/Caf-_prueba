import {useState, useEffect} from "react";

export default function Main() {
    const [products, setProducts] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('/api/products')
        .then(response => response.json())
        .then(data => {
            setProducts(data.productos);
        })
        .catch(error => console.log(error));
    },[])

    useEffect(() => {
        fetch('/api/users')
        .then(response => response.json())
        .then(data => {
            setUsers(data.usuarios)
        })
        .catch(error => console.log(error));
    },[])
    
    return (
        <div className="row justify-content-evenly mt-4 ">
            <div className="card-cafeArte  text-cafeArte bg-cafeArte mb-3 col-2 border-5 shadow-card" >
                <div className="card-header-cafeArte">Cantidad de Productos</div>
                <div className="card-body-cafeArte">
                    <h5 className="card-title"> {products.length}</h5>
                </div>
            </div>
            <div className="card-cafeArte  text-cafeArte bg-cafeArte mb-3 col-2 shadow-card" >
                <div className="card-header-cafeArte">Total de <br /> Usuarios</div>
                <div className="card-body-cafeArte">
                    <h5 className="card-title">{users.length}</h5>
                </div>
            </div>
        </div>
    )
}