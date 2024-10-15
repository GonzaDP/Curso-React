import { useEffect, useState } from "react"
import { getProduct } from "../../data/data"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
    const [product,setProduct] = useState({})
    const {idProduct} = useParams()

    useEffect(() => {
        getProduct(idProduct)
        .then((info) => setProduct(info))
    }, [idProduct])

    return(
        <ItemDetail product={product}/>   
    )
}

export default ItemDetailContainer