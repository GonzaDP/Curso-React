import { useState } from "react"
import "./FormCheckout.css"



const FormCheckout = ({dataForm, handleChangeInput, handleSubmitForm}) => {


  return (
    <div className="formContainer">
      <form className="formCheckout" onSubmit={handleSubmitForm}>
        <label htmlFor="fullname">Nombre completo: </label>
        <input type="text" id="fullname" name="fullname" value={dataForm.fullname} onChange={handleChangeInput}/>
        <label htmlFor="phone">Telefono: </label>
        <input type="number" id="phone" name="phone" value={dataForm.phone} onChange={handleChangeInput}/>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" value={dataForm.email} onChange={handleChangeInput}/>  
        <button className="submitButton" type="submit">Enviar</button>
      </form>
    </div>
  )  
} 

export default FormCheckout