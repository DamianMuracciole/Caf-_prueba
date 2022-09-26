import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo2.png'
export function SideBar() {
    return (
    <header>
        <div className='cols-1 justify-content-evenly pb-3'>
            <img className="w-50 rounded-3 my-5 " src={logo} alt='logo'></img>
            <div><Link to='/'          className='links-sidebar py-3 d-block'>Home </Link><br/></div>
            <div><Link to='/productos' className='links-sidebar py-3 d-block'>Productos</Link><br/></div>
            <div><Link to='/usuarios'  className='links-sidebar py-3 d-block' >Usuarios</Link><br/></div>
            {/* <div><Link to='/probando'  className='links-sidebar navbar-brand py-3 d-block'>Probando </Link><br/></div> */}
        </div>
    </header>
    )
}