import React, {useState} from "react";

function UserList ({users,loadingUsers}) {
  const [cantPerPage,setCantPerPage] = useState(3)
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

  const handleInputChange = () => {
    setCantPerPage()
  }


  return(
  <div>        
    { loadingUsers ?  <h3>Cargando .... </h3> : 
      <div className="container border-5 mt-5 mb-2">
          <div className="container">
            <div className="row">
              <div className="col-3" />
              <h2 className="col-6">Todos los usuarios</h2>
            </div>
            <div className="row">
              <div className="col-11" />
              <div className="col-1">
                  <h6 className="numero">Usr/pag</h6>
                  {/* <form>
                    <input type="number" onChange={handleInputChange}>{cantPerPage}</input>
                  </form> */}
                  <h5 className="numero-style-number">{cantPerPage}</h5>
              </div>
            </div>        
          </div>
          <table className="table" id="dataTable" width="100%">
          <thead>
            <tr>
                <td className="w-20">Apellido</td>
                <td className="w-20">Nombre</td>
                <td className="w-20">Email</td>
                <td className="w-10">Avatar</td>
            </tr>
          </thead>
                  
          <tbody>
            { users && users.length > 0 ?
            
            users.slice(minProductNumber, maxProductNumber+1).map((user,index) => //.filter(product => (product.status === 'A' ))
              <tr key = {'0'* index}>
                <td key = {'1'+ index}>{user.lastName}</td>
                <td key = {'2'+ index} className='mh-100' >{user.name}</td>
                <td key = {'3'+ index}>{user.email}</td>
                <td key = {'4'+ index}>
                  <img className="w-75" src={user.image} alt='imagen de producto' ></img>
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
              <buttom className="page-link colores-nav" onClick={()=>incPage(users.length)}> Siguiente </buttom>
            </li>
          </ul>
        </nav>

      </div>
    }
    </div>
    )
}

export default UserList