const Item = ({product}) => {
    return (
        <div >
            <p>{product.name}</p>
            <p>${product.price}</p>
            <img src={product.img}/>
        </div>     
    )
}

export default Item