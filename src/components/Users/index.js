import React, {useState, useEffect} from "react";

function Users(){
    const [users, setUsers] = useState([])
    const [lastUser, setLastUser] = useState([])

    useEffect(() => {
        console.log('%cPasó por Users','color: yellow');
        // fetch('https://jsonplaceholder.typicode.com/todos')
        fetch('/api/users')
        .then(response => response.json())
        .then(data => {
            setUsers(data.usuarios)
            setLastUser(data.usuarios[(data.usuarios.length -1)])
            console.log("%cUsuarios: ", "color: blue", data.usuarios[(data.usuarios.length -1)]);
        })
        .catch(error => console.log(error));
    },[])


    return(
        <div>
            <h2>Cantidad total de Usuarios</h2>
            <p>{users.length}</p>
            <hr />
            <h2>Último Usuario</h2>
                <p>Nombre: {lastUser.name}</p>
                <p>Apellido: {lastUser.lastName}</p>
                <p>Email: {lastUser.email}</p>
                <p>Url Imagen: {lastUser.image}</p>
                <hr />
            <h2>Todos los Usuarios</h2>
                     
            <table className="table-bordered" id="dataTable" width="100%">
				<thead>
                    <tr>
                        <td>Apellido</td>
                        <td>Nombre</td>
                        <td>Email</td>
                        <td>Url Imagen</td>
                    </tr>
				</thead>
                    
				<tbody>
                    {users.map((user,index) => 
                        <tr key = {'0'* index}>
                            <td key = {'1'* index}>{user.lastName}</td>
                            <td key = {'2'* index}>{user.name}</td>
                            <td key = {'3'* index}>{user.email}</td>
                            <td key = {'4'* index}>{user.image}</td>
                        </tr>
                    )}
				</tbody>
			</table>

        </div>
    )
}

export default Users