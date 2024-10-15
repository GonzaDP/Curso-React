import { Link } from "react-router-dom"

const Item = ({product}) => {
    return (
        <div className="item" >
            <p>{product.name}</p>
            <img className="img" src={product.img}/>
            <p>${product.price}</p>
            <Link to={"/detail/" + product.id}>Ver detalles</Link>
        </div>     
    )
}

export default Item