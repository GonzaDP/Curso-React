import './NavBar.css'
import CartWidget from '../cartWidget/CartWidget'
import { Link } from 'react-router-dom'


const NavBar = () => {

    return (
        <nav>
            <Link to="/" className='marcaEIcono'>
                <p>Coffeeland</p>     
            </Link>
            <div className='seccionesNav'>
                <Link to="/category/Bebidas" className='link'>Bebidas</Link>
                <Link to="/category/Facturas" className='link'>Facturas</Link>
                <Link to="/category/Tortas" className='link'>Tortas</Link>
                <Link to="/category/Sandwichs" className='link'>Sandwichs</Link>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar