import { Link } from "react-router-dom"

const Item = ({product}) => {
    return (
        <div className="item">
            <Link to={"/detail/" + product.id} className='itemImg'>
                <img className="img" src={product.img}/>
                <p className="overlay">
                   COMPRAR
                </p>
            </Link>    
            <p className="name">{product.name}</p>
        </div>
    )
}

export default Item