import React, { useState } from "react";
import "./Form.css";
import { useCart } from "../hooks/useCart";

export  const Form = ({open }) => {
  const {cart , sendForm} = useCart();
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [formaDePago, setFormaDePago] = useState("");
  const [formaDeEntrega, setFormaDeEntrega] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar el formulario
    e.preventDefault();
    console.log(cart.cart)
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
   sendForm(text)
    console.log("Nombre:", nombre);
    console.log("Teléfono:", telefono);
    console.log("Forma de pago:", formaDePago);
    console.log("Forma de entrega:", formaDeEntrega);
  };

  return (
    <div className="container">
     
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="tel"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <div>
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
        <div>
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
        <button type="submit">Enviar Pedido</button>
      </form>
    </div>
  );
};

