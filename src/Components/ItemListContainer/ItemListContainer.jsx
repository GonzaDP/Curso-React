
import useProducts from "../../hooks/useProductos"
import ItemList from "./ItemList"
import "./ItemListContainer.css"
import Loading from "../loading/loading"
import hocFilterProducts from "../../hoc/hocFilterProducts"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { collection, getDocs } from "firebase/firestore"
import db from "../../db/db.js"


const ItemListContainer = ({products}) => {
const {loading} = useProducts()
const {idCategory} = useParams()

const getProducts = () => {
    const  collectionName = collection(db,"products")
    getDocs(collectionName)
    .then((dataDb)=> {
        const productsDb = dataDb.docs.map((productDb)=> {
            return {id: productDb.id, ...productDb.data()}
        })

        console.log(productsDb)
    })
}

useEffect(()=> {
    getProducts()
}, [idCategory])

 
    return (
        <div className="itemlistcontainer">
            {
            loading === true ?
            <Loading/>
            :   
            <ItemList products={products}/>
            }
        </div>
    )
}

const ItemListContainerWithHoc = hocFilterProducts(ItemListContainer)

export default ItemListContainerWithHoc