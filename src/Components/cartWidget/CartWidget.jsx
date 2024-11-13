import './CartWidget.css'    
import mugIcon from './mug-saucer-solid.svg';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    const total = totalQuantity()

    return (
        <Link to="/cart" className='contenedor'>
            <img src={mugIcon} alt='Mug and Saucer'></img>
            <p className='number-cartwidget'>{total >= 1 && total}</p>
        </Link>
    )
}

export default CartWidget