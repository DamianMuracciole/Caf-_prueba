import {Link} from 'react-router-dom'
export default function Footer() {
    return (
    <footer className='bg-warming'>
        <div className='row row-cols-md-4 justify-content-evenly'>
            <div><Link to='/'>Usuarios</Link><br /></div>
            <div><Link to='/productos'>Productos</Link><br /></div>
            <div><Link to='/probando'>Probando</Link><br /></div>
        </div>
    </footer>
    )
}