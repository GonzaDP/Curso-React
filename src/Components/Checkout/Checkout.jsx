import FormCheckout from "./FormCheckout"
import { Timestamp, doc, addDoc, collection } from "firebase/firestore"
import { CartContext, CartProvider } from "../Context/CartContext"
import { useState, useContext } from "react"
import db from "../../db/db.js"
import { Link } from "react-router-dom"
import FormSent from "./FormSent.jsx"



const Checkout = ({ }) => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: "",
    checkEmail: ""
  })

  const [orderId, setOrderId] = useState(null)
  const [error, setError] = useState("");
  const { cart, totalPrice, deleteCart } = useContext(CartContext)

  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value })
  }

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if (dataForm.email !== dataForm.checkEmail) {
      setError("Los correos electrónicos no coinciden");
      return;
    }

    setError("");


    const order = {
      buyer: { ...dataForm },
      products: [...cart],
      date: Timestamp.now(new Date()),
      total: totalPrice()
    }
    uploadOrder(order)
  }
  const uploadOrder = (newOrder) => {
    const ordersCollection = collection(db, "orders ")
    addDoc(ordersCollection, newOrder)
      .then((response) => {
        setOrderId(response.id)
      })
      .finally(() => {
        updateStock()
      })
  }

  const updateStock = () => {
    cart.map(({ quantity, id, ...productCart }) => {
      const productRef = doc(db, "products", productCart.id)
      setDoc(productRef, { ...productCart, stock: productCart.stock - quantity })
    })

    deleteCart()
  }



  return (
    <div>
      {
        orderId ? (
          <FormSent orderId={orderId} />
        ) : (

          <FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm} error={error} />
        )
      }
    </div>
  )
}

export default Checkout