import { useState, useEffect } from "react";
import { getProducts } from "../data/data";


const useProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        setLoading(true)

        getProducts()
        .then((info) => {
            setProducts(info)
        })
        .catch((error) => {
            console.error(error)
        })
        .finally(() => {
            setLoading(false)   
        })
    }, [])
    
        return { products, loading}
    }
    
    export default useProducts


