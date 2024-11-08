

const ItemDetail = ({product}) => {

    return(
          <div className="itemdetailcontainer">  
            <section className="itemDescription">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p>${product.price}</p>
            </section>
            <section >
                <img src={product.img}/>
            </section>

          </div> 
    )
}

export default ItemDetail