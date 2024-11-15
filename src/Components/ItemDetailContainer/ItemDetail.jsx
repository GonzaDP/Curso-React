import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ product, addProduct }) => {

    return (
        <div className="itemdetailcontainer">
            <section className="itemDescription">
                <h1 className="tittle">{product.name}</h1>
                <p className="description">{product.description}</p>
                <p className="descriptionPrice">${product.price}</p>
                <ItemCount stock={product.stock} addProduct={addProduct} />
            </section>
            <section className="sectionImg" >
                <img src={product.img} />
            </section>
        </div>
    )
}

export default ItemDetail