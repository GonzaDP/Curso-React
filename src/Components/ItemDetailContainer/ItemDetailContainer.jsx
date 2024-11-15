import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"
import Loading from "../loading/loading"
import useProducts from "../../hooks/useProductos"
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { doc, getDoc } from "firebase/firestore"
import db from "../../db/db.js"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { addProductInCart } = useContext(CartContext)
    const { idProduct } = useParams()
    const { loading } = useProducts()

    const addProduct = (count) => {
        const productCart = { ...product, quantity: count }
        addProductInCart(productCart)
    }

    const getProduct = () => {
        const docRef = doc(db, "products", idProduct)
        getDoc(docRef)
            .then((dataDb) => {
                const productDb = { id: dataDb.id, ...dataDb.data() }
                setProduct(productDb)
            })
    }

    useEffect(() => {
        getProduct()

    }, [idProduct])

    return (

        <>
            {
                loading === true ?
                    <Loading />
                    :
                    <ItemDetail product={product} addProduct={addProduct} />
            }
        </>
    )
}

export default ItemDetailContainer