import {Link} from 'react-router-dom'
export default function Header() {
    return (
    <header>
        <h2 className='titulo' > Dashboard CaféArte</h2>
        <hr />
        <div className='row row-cols-md-4 justify-content-evenly'>
            <div><Link to='/'          className='titulo' >Usuarios </Link><br/></div>
            <div><Link to='/productos' className='titulo' >Productos</Link><br/></div>
            <div><Link to='/probando'  className='titulo' >Probando </Link><br/></div>
        </div>
    </header>
    )
}