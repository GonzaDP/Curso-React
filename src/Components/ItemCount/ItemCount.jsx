import { useState } from "react"
import ItemDetail from "../ItemDetailContainer/ItemDetail"
import "../ItemCount/ItemCount.css"
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"


const ItemCount = ({ stock, addProduct }) => {
    const [count, setCount] = useState(1)


    const handleClickDecrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const handleClickIncrement = () => {
        if (count < stock) {
            setCount(count + 1)

        }
    }

    return (
        <>
            <div className="cartContainer">
                <button className="addAndDiscard" onClick={handleClickDecrement}>-</button>
                <p className="count">{count}</p>
                <button className="addAndDiscard" onClick={handleClickIncrement}>+</button>
            </div>
            <div>
                <button className="addProduct" onClick={() => addProduct(count)}>Agregar producto</button>
            </div>
            <div>
                <p className="stock">Stock disponible: {stock}</p>
            </div>
        </>

    )
}

export default ItemCount