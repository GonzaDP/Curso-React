import { useState } from "react"
import ItemDetail from "../ItemDetailContainer/ItemDetail"
 
const ItemCount = ({ stock, addProduct }) => {
    const [count, setCount] = useState(1)

const handleClickDecrement = () => {
    if(count > 0){
        setCount(count - 1)
    }  
}

const handleClickIncrement = () => {
    if(count < stock){
        setCount(count + 1)
    
    }
    }  
  
        return (
            <div>
                <button onClick={handleClickDecrement}>-</button>
                <p>{count}</p>
                <button onClick={handleClickIncrement}>+</button>
                <button onClick={() =>addProduct(count)}>Agregar producto</button>
                <p>Stock disponible: {stock}</p>
            </div>

        )
    }
    
 export default ItemCount