import './NavBar.css'
import CartWidget from '../cartWidget/CartWidget'
import { Link } from 'react-router-dom'


const NavBar = () => {

    return (
        <nav>
            <Link to="/" className='marcaEIcono'>
                <p>Coffeeland</p>     
            </Link>
            <ul className='seccionesNav'>
                <li><Link to="/category/Bebidas">Bebidas</Link></li>
                <li><Link to="/category/Facturas">Facturas</Link></li>
                <li><Link to="/category/Tortas">Tortas</Link></li>
                <li><Link to="/category/Sandwichs">Sandwichs</Link></li>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default NavBar