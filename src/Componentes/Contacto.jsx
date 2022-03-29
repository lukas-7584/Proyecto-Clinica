import React,{useState, useEffect,useRef,useContext} from "react";

export default function Contacto() {

    const nameRef = useRef();
    const addressRef = useRef();
    const stateRef = useRef();
    const emailRef = useRef();
    const mobileRef = useRef();
    const MensajeRef = useRef();

    function handleSubmit(event) {

        event.preventDefault();
    }

    return (
    <div>
            <form onSubmit={handleSubmit}> 

                            <h3>Ingresa tus datos</h3>

                            <input type="text" name="name"  ref={nameRef} placeholder="Nombre y Apelllido" required />
                            <br />

                            <input type="tel" name="número de teléfono" ref={mobileRef} placeholder="Número de teléfono"  required/>
                            <br />

                            <input type="email" name="email" ref={emailRef} placeholder="Email" required />
                            <br />

                            <input type="text" name="address" ref={addressRef} placeholder="Direccion" required  />
                            <br />

                            <input type="text" name="state" ref={stateRef} placeholder="Provincia" required />
                            <br />

                            <textarea type="text" name="mensaje" ref={MensajeRef} placeholder="Mensaje" required  />
                            <br />

                            <button type="submit" >Enviar</button>

            </form>
    </div>
    )

}
