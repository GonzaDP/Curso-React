import { createContext, useState } from "react"



const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addProductInCart = (newProduct) => {
        setCart( [ ...cart, newProduct] )
    }

const totalQuantity = () => {
    const quantity = cart.reduce((total, productCart) => total + productCart.quantity, 0 )
    return quantity
}

console.log(cart)


    return(
        <CartContext.Provider value={ { cart, addProductInCart, totalQuantity    }}> 
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider}