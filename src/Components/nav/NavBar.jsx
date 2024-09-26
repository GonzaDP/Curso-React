import './NavBar.css'
import CartWidget from '../cartWidget/CartWidget'



const NavBar = () => {

    return (
        <nav>
            <div className='marcaEIcono'>
            <p>Coffeeland</p>     
            </div>
            <ul className='seccionesNav'>
                <li>Cafe</li>
                <li>Refrescos</li>
                <li>Facturas</li>
                <li>Tortas</li>
                <li>Sandwichs</li>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default NavBar