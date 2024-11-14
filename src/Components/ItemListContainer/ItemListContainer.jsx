
import useProducts from "../../hooks/useProductos"
import ItemList from "./ItemList"
import "./ItemListContainer.css"
import Loading from "../loading/loading"
import hocFilterProducts from "../../hoc/hocFilterProducts"
import { useParams } from "react-router-dom"
import { useEffect } from "react"


const ItemListContainer = ({products}) => {
const {loading} = useProducts()
const {idCategory} = useParams()



useEffect(()=> {

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