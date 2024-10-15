import { useState, useEffect } from "react";
import { getProducts, getProduct } from "../data/data";
import { useParams } from "react-router-dom"


const useProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const {idCategory} = useParams()
   
    useEffect(() => {
        
        setLoading(true)
        
        getProducts()
        .then((info) => {
    
            if(idCategory){
                const filterProduct = info.filter((product) => product.category === idCategory )
                setProducts(filterProduct)
                
            }else{
                setProducts(info)
            }
        })
        .catch((error) => {
            console.error(error)
        })
        .finally(() => {
            setLoading(false)  
            console.log(idCategory) 
        })
        
    }, [idCategory])

        return { products, loading, idCategory}
    }
    
    export default useProducts


