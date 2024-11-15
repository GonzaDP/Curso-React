import { createContext, useState } from "react"



const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addProductInCart = (newProduct) => {
        const condition = isInCart(newProduct.id)
        if (condition) {
            let newCart = [...cart]
            newCart.forEach((productCart) => {
                if (productCart.id === newProduct.id) {
                    const newQuantity = productCart.quantity + newProduct.quantity
                    if (newQuantity > productCart.stock) {
                        alert("Superaste la cantidad en stock")
                        return productCart
                    }
                    else {
                        productCart.quantity = productCart.quantity + newProduct.quantity
                    }
                }
            })

            setCart(newCart)
        } else {
            setCart([...cart, newProduct])
        }

    }

    const isInCart = (idProduct) => {
        return cart.some((productCart) => productCart.id === idProduct)

    }

    const deleteProductInCart = (idProduct) => {
        const productsFilter = cart.filter((productCart) => productCart.id !== idProduct)
        setCart(productsFilter)
    }

    const totalQuantity = () => {
        const quantity = cart.reduce((total, productCart) => total + productCart.quantity, 0)
        return quantity
    }

    const totalPrice = () => {
        const price = cart.reduce((total, productCart) => total + (productCart.price * productCart.quantity), 0)
        return price
    }


    const deleteCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, addProductInCart, totalQuantity, totalPrice, deleteProductInCart, isInCart, deleteCart }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }