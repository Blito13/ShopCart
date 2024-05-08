import React, { useState } from "react";
import "./Form.css";
import { useCart } from "../hooks/useCart";
import { ExitIcon } from "./Icons";

export  const Form = ({isChecked , setIsChecked }) => {
  const {cart , sendForm , clearCart} = useCart();
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [formaDePago, setFormaDePago] = useState("");
  const [formaDeEntrega, setFormaDeEntrega] = useState("");
  /* const [isChecked, setIsChecked] = useState(false); */

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !telefono || !formaDePago || !formaDeEntrega) {
      alert("Todos los campos son obligatorios");
      return ; // Detener el envío del formulario si falta algún campo
    }
    let text = "Hola AmasoCriando este es mi pedido ";
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
    Nombre : 
    -${nombre}
    Telefono 
    -${telefono}
    Forma de pago
    -${formaDePago}
    Forma de entrega :
    -${formaDeEntrega}`;
    console.log(text)
   sendForm(text);
   clearCart();
   setIsChecked(false)
   


    sendForm(text);
    clearCart();
   /*  setIsChecked(false) */;
  };

  const handleFormaDeEntregaChange = (e) => {
    e.preventDefault();
    let entrega =  e.target.value
    setFormaDeEntrega(entrega);
  };

  const handleDeliveryOptionChange = (e) => {
    e.preventDefault();
    const selectedOption = e.target.value;
    const selectedZone = e.target.options[e.target.selectedIndex].id;
  setDeliveryZone(selectedZone);
  setDeliveryOption(selectedOption); 
  };

  return (
    <div >
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
        <label >
          <ExitIcon></ExitIcon>
        </label>
        <h1>Lo ultimo! </h1>
        <div style={{flexDirection : "row"}}>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div  >
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="tel"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <div style={{display : "flex",flexDirection : "column" , alignItems  :"flex-start"}}>
          <p>Forma de pago:</p>
          <label>
            <input
              type="radio"
              name="formaDePago"
              value="Efectivo"
              checked={formaDePago === "Efectivo"}
              onChange={(e) => setFormaDePago(e.target.value)}
            />
            Efectivo
          </label>
          <label>
            <input
              type="radio"
              name="formaDePago"
              value="Transferencia"
              checked={formaDePago === "Transferencia"}
              onChange={(e) => setFormaDePago(e.target.value)}
            />
            Transferencia
          </label>
        </div>
        <div style={{display : "flex",flexDirection : "column" , alignItems : "flex-start"}}>
          <p>Forma de entrega:</p>
          <label>
            <input
              type="radio"
              name="formaDeEntrega"
              value="Delivery"
              checked={formaDeEntrega === "Delivery"}
              onChange={(e) => setFormaDeEntrega(e.target.value)}
            />
            Delivery
          </label>
          <label>
            <input
              type="radio"
              name="formaDeEntrega"
              value="Retiro Personalmente"
              checked={formaDeEntrega === "Retiro Personalmente"}
              onChange={(e) => setFormaDeEntrega(e.target.value)}
            />
            Retiro Personalmente
          </label>
        </div>
        <br />
        <br></br>
        <button type="submit">Enviar pedido por whatsApp</button>
      </form>
    </div>
  );
};

