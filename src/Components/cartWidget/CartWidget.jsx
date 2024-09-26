import './CartWidget.css'    
import mugIcon from './mug-saucer-solid.svg';

const CartWidget = () => {

    return (
        <div className='contenedor'>
            <img src={mugIcon} alt='Mug and Saucer'></img>
            <p>1</p>
        </div>
    )
}

export default CartWidget