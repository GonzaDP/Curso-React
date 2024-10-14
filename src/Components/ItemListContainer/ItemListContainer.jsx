import { useState, useEffect } from "react"
import { getProducts } from "../../data/data"
import ItemList from "./ItemList"
import "./ItemListContainer.css"

const ItemListContainer = () => {
const [products, setProducts] = useState([])

useEffect(() => {
    getProducts()
    .then((info) => {
        setProducts(info)
    })
    .catch((error) => {
        console.error(error)
    })
    .finally(() => {
        console.log("Se finalizo")    
    })
}, [])


    return (
        <div>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer