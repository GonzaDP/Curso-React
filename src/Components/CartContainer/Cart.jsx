import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import "../CartContainer/Cart.css"
import { Link } from "react-router-dom"

const cart = () => {
    const{cart, totalPrice, deleteProductInCart, deleteCart} = useContext(CartContext)

if(cart.length ===0 ){
    return(
        <div className="cartEmptyContainer">
            <h2 className="mensajeCartEmpty">No seleccionaste ningun producto todavia ☹️</h2>
            <Link className="linkBack" to="/">Volver al inicio</Link>
        </div>
    )
}

    return (
        <div className="cartSection">
            <h1>Su compra:</h1>
            {   
                cart.map ((productCart) => (
                    <div>
                        <div className="cartDetail" key={productCart.id}>
                            <img src={productCart.img} alt="" />
                            <p>{productCart.name}</p>
                            <p>Precio c/u: ${productCart.price}</p>
                            <p>Cantidad: {productCart.quantity}</p>
                            <p>Precio parcial: ${productCart.price * productCart.quantity}</p>  
                            <button className="deleteProdcutCartButton" onClick={ () => deleteProductInCart(productCart.id)}>Borrar</button>
                        </div>
                    </div>
                ))
            }
            <div className="totalContainer">
            <button className="deleteCartButton" onClick={deleteCart}>Eliminar compra</button>
                <p className="total">Total: ${totalPrice()}</p>
            </div>
            
        </div>
    )
}

export default cart