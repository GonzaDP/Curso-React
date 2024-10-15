

const ItemDetail = ({product}) => {

    return(
        <div className="itemdetailcontainer">
            <h2>{product.name}</h2>
            <img src={product.img}/>
            <p>{product.description}</p>
            <p>${product.price}</p>
        </div>
    )
}

export default ItemDetail