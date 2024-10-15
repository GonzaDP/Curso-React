import useProducts from "../hooks/useProductos";
import { useState, useEffect } from "react";
import "./hocFilterProducts.css"

const hocFilterProducts = (Component) => {


    return function() {
        const { products } = useProducts()
        const [query, setQuery] = useState("")

        const changeInput = (event) => {
            setQuery( event.target.value.toLowerCase())
        }

        const search = () => {
            let filterProducts = products.filter ((product) => (
                product["name"].toLowerCase().includes(query)
            ))
            return filterProducts
        }

        return (
            <div className="filterProducts">
            <div className="filter">
                <input className="filterInput" type="text" placeholder="Busca tu producto aqui" onChange={changeInput}/>
            </div>
            <Component products={search()}/>
            </div>
        )
    }
}

export default hocFilterProducts