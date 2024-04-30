import React, { useState } from "react";
import "./Form.css";
import { useCart } from "../hooks/useCart";
import { ExitIcon } from "./Icons";

export const Form = ({ isChecked, setIsChecked }) => {
  const { cart, sendForm, clearCart } = useCart();
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [formaDePago, setFormaDePago] = useState("");
  const [formaDeEntrega, setFormaDeEntrega] = useState("");
  const [deliveryOption, setDeliveryOption] = useState(0); // Estado para almacenar la opción de entrega seleccionada

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !telefono || !formaDePago || !formaDeEntrega) {
      alert("Todos los campos son obligatorios");
      return;
    }

    let text = "Hola AmasoCriando este es mi pedido ";
    let total = cart.total;
    let discounts = cart.discounts;
    let finalTotal =  total - discounts;
    let deliver = Number(finalTotal) + Number(deliveryOption);
    console.log(Number(finalTotal) + Number(deliveryOption) ,"caca")
    cart.cart.map((e) => {
      text += `
      *${e.title}  : 
      - cantidad : ${e.quantity}
      - precio Unitario : ${e.price}`;
    });
    text += `
    Precio total : 
    - ${deliver}
    Nombre : 
    -${nombre}
    Telefono 
    -${telefono}
    Forma de pago:
    -${formaDePago}
    Zona de entrega : 
    -${"falta esto"}
    Forma de entrega :
    -${formaDeEntrega}`;

    console.log(text)
    sendForm(text);
    clearCart();
    setIsChecked(false);
  };

  const handleFormaDeEntregaChange = (e) => {
    e.preventDefault();
    setFormaDeEntrega(e.target.value);
  };

  const handleDeliveryOptionChange = (e) => {
    e.preventDefault();
    const selectedOption = e.target.value;
    
    console.log(selectedOption)// Actualiza el estado con la opción de entrega seleccionada
  setDeliveryOption(selectedOption); 
  };

  return (
    <div className={`container ${isChecked ? "visible" : ""}`}>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
        <label onClick={() => setIsChecked(false)}>
          <ExitIcon></ExitIcon>
        </label>
        <h1>Lo ultimo! </h1>
        <div style={{ flexDirection: "row" }}>
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
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
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
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <p>Forma de entrega:</p>
          <label>
            <input
              type="radio"
              name="formaDeEntrega"
              value="Delivery"
              checked={formaDeEntrega === "Delivery"}
              onChange={handleFormaDeEntregaChange}
            />
            Delivery
          </label>
          <label>
            <input
              type="radio"
              name="formaDeEntrega"
              value="Retiro Personalmente"
              checked={formaDeEntrega === "Retiro Personalmente"}
              onChange={handleFormaDeEntregaChange}
            />
            Retiro Personalmente
          </label>
          {formaDeEntrega === "Delivery" && ( // Mostrar opciones de entrega solo si la forma de entrega es "Delivery"
            <div>
              <p>Opciones de entrega:</p>
              <select  value={deliveryOption} onChange={handleDeliveryOptionChange} >
                <option value="" disabled hidden>Cordoba</option>
                <option value={2500}>Zona Norte $2500 </option>
                <option value={800}>Zona Sur $800</option>
                <option value={1000}>Zona Centro $1000</option>
                <option value={2000}>Zona Este $2000</option>
                <option value={2000}>Zona Oeste $2000</option>
              </select>
            </div>
          )}
        </div>
        <br />
        <br />
        <button type="submit">Enviar pedido por WhatsApp</button>
      </form>
    </div>
  );
};