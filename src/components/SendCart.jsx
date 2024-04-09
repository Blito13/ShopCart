import React, { useEffect, useState } from 'react';
import { useCart } from "../hooks/useCart";
import { Link } from 'react-router-dom'

export function SendCart() {
  const [order, setOrder] = useState('');
  const [total , setTotal]  = useState(0);
  const {cart , sendForm} = useCart();
  
  console.log(cart.total)

 /*  useEffect(()=>{
    setTotal(getTotal())
  }) */
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(sendForm)
    sendForm(order);
  };
  const handleMessage = (e) =>{
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
    - ${finalTotal}`;
   sendForm(text)
  }

  return (
    <div>
      <form >
        <label>
        <p>Total:${cart.total}</p>
        </label>
        <br />
        <button style = {{backgroundColor : "rgb(19, 148, 16)"}}  >Enviar pedido</button>
      </form>
    </div>
  );
}

