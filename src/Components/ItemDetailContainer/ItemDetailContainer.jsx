import { useEffect, useState } from "react"
import { getProduct } from "../../data/data"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"
import Loading from "../loading/loading"
import useProducts from "../../hooks/useProductos"

const ItemDetailContainer = () => {
    const [product,setProduct] = useState({})
    const {idProduct} = useParams()
    const {loading} = useProducts()

    const addProduct = (count) => {
        const productCart = { ...product, quantity: count }
        console.log(productCart)
    }

    useEffect(() => {
        getProduct(idProduct)
        .then((info) => setProduct(info))
    }, [idProduct])

    return(
        
        <>
        {
        loading === true ?
        <Loading/>
        :   
        <ItemDetail product={product} addProduct={addProduct}/>
        }
    </>
    )
}

export default ItemDetailContainer