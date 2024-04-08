import React, { useState } from "react";
import { useCart } from '../hooks/useCart';
import "./Form.css";


export const  Form = () => {
   const {cart , sendForm} = useCart();
   const [nombre , setNombre ] = useState("");
   const [telefono , setTelefono ] = useState("");
   const [formaDePago , setFormaDePago ] = useState("");
   const [formaDeEntrega , setFormaDeEntrega ] = useState("");
    const handleMessage = (e) =>{
        e.preventDefault();
        console.log(cart.cart)
        let finalTotal= cart.total ;
        cart.cart.map(e => {
          text +=  ` 
          *${e.title}  : 
          - cantidad : ${e.quantity}
          - precio Unitario : ${e.price}`
        })
        text += `
        Precio total : 
        - ${finalTotal}
        Telefono : 
        - ${telefono}
        Forma de pago : 
        -${formaDePago}
        Forma de entrega : 
        -${formaDeEntrega}`
        ;
       sendForm(text)
      }
      const handleChange = (e) => {
        const {name ,value} = e.target;
        console.log(name , value)

      }
    return (
        <div className="container" >
            <form onSubmit={handleMessage}>
            <h4>Nombre y apellido</h4>
            <input type="text" id = "test" name ="nombre" onChange={(e)=> handleChange(e)}/>
            <h4>Telefono</h4>
            <input type="text1" id = "test" name = "telefono" onChange={(e)=> handleChange(e)}/>
            <label htmlFor="test2" name ="formadepago"onChange={(e)=> handleChange(e)} >Forma de pago</label>
            <input type="radio" id= "test2" value = "Efectivo"/>
            <input type="radio" id= "test2" value = "Transferencia"/>
            <label htmlFor="test3" name ="formadeentrega" onChange={(e)=> handleChange(e)}>Forma de Entrega</label>
            <input type="radio" id= "test3" value = "Lo retiro personalmente"/>
            <input type="radio" id= "test3" value = "Necesito que me lo envien"/>
            <button type = "submit" value="Pedir por Whatsapp"/>
            </form>
        </div>
    )
};