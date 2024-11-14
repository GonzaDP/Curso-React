import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../db/db.js";

const useProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const {idCategory} = useParams()
   

    const getProducts = () => {
        setLoading(true)
        const  collectionName = collection(db,"products")
        getDocs(collectionName)
        .then((dataDb)=> {
            
            const productsDb = dataDb.docs.map((productDb)=> {
                return {id: productDb.id, ...productDb.data()}
            })
            
           setProducts(productsDb)
        
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false) 
        })
       
    }

    const getProductByCategory = () => {
        setLoading(true)
        const collectionName = collection(db, "products")
        const q = query (collectionName, where( "category", "==", idCategory ))
        getDocs(q)
        .then((dataDb)=> {
            const productsDb = dataDb.docs.map((productDb)=> {
                return {id: productDb.id, ...productDb.data()}
            })
            setProducts(productsDb)
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false) 
        })

    }

    
    useEffect(() => {
        
        if(idCategory){
        
            getProductByCategory()
            
        }else{
            getProducts()
        }
        
        //setLoading(true)
        //getProducts()     

       // .finally(() => {
       //     setLoading(false)  

       // })
        
    }, [idCategory])

        return { products, loading, idCategory}
    }
    
    export default useProducts


