import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo2.png'
export function SideBar() {
  return (
    <header>
      <div className='cols-1 justify-content-evenly pb-3'>
        <img className="w-50 rounded-3 my-5 " src={logo} alt='logo'></img>

        <div><Link to='/' className='links-sidebar py-3 d-block'>Home </Link><br/></div>
                  
        <div className='links-sidebar py-3 d-block' data-bs-toggle="collapse" data-bs-target="#productos" aria-expanded="false" aria-controls="productos">Productos</div>

        <div className="row">
          <div className="col">
            <div id="productos" className="collapse multi-collapse" >
              <div><Link to='/productos' className='links-sidebar py-3 d-block'>Estadisticas</Link><br/></div>
              <div><Link to='/ultimoProducto' className='links-sidebar py-3 d-block'>Ultimo producto</Link><br/></div>
              <div><Link to='/listadoProductos' className='links-sidebar py-3 d-block'>Listado de productos</Link><br/></div>                 
            </div>
          </div>
        </div>

        <div className='links-sidebar py-3 d-block' data-bs-toggle="collapse" data-bs-target="#usuarios" aria-expanded="false" aria-controls="usuarios">Usuarios</div>

        <div className="row">
          <div className="col">
            <div className="collapse multi-collapse" id="usuarios">
              <div><Link to='/usuarios'  className='links-sidebar py-3 d-block' >Usuarios</Link><br/></div>
            </div>
          </div>
        </div>

      </div>
    </header>
  )
} 