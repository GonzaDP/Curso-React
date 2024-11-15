import "./FormSent.css"
import { Link } from "react-router-dom"


const FormSent = ({ orderId }) => {


    return (
        <div className="fondoFormSent">
            <div className="sentOrderContainer">
                <h1>Se envio la orden correctamente</h1>
                <p>No olvide su orden de seguimiento: {orderId}</p>
                <Link className="backToHome" to="/">Volver al inicio</Link>
            </div>
        </div>
    )
}

export default FormSent