import FormCheckout from "./FormCheckout"
import { Timestamp, addDoc, collection } from "firebase/firestore"
import { CartContext } from "../Context/CartContext"
import { useState, useContext } from "react"
import db from "../../db/db.js"


const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: ""   
  })
  
const { cart, totalPrice } = useContext(CartContext)

const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value })
}

const handleSubmitForm = (event) => {
    event.preventDefault();
    const order = {
        buyer: { ...dataForm },
        products: [ ...cart ],
        date: Timestamp.now(new Date()), 
        total: totalPrice()
    }
    uploadOrder(order)
}
const uploadOrder = (newOrder) => {
    const ordersCollection = collection(db, "orders ")
    addDoc(ordersCollection, newOrder)
        .then((response) => {
            console.log(response.id)
        })
}

  return (
    <div>
        <FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm}/>
    </div>
  )  
} 

export default Checkout