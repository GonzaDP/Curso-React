const Item = ({product}) => {
    return (
        <div className="item" >
            <p>{product.name}</p>
            <img className="img" src={product.img}/>
            <p>${product.price}</p>
        </div>     
    )
}

export default Item