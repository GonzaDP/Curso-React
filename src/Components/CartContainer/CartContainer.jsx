import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import "../CartContainer/CartContainer.css"

const cartContainer = () => {
    const{cart} = useContext(CartContext)

    return (
        <div className="cartSection">
            <h1>Su compra:</h1>
            {   
                cart.map ((productCart) => (
                    <div className="cartDetail" key={productCart.id}>
                        <img src={productCart.img} alt="" />
                        <p>{productCart.name}</p>
                        <p>Precio c/u: ${productCart.price}</p>
                        <p>Cantidad: {productCart.quantity}</p>
                        <p>Precio parcial: ${productCart.price * productCart.quantity}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default cartContainer