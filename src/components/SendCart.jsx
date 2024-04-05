import React, { useEffect, useState } from 'react';
import { useCart } from "../hooks/useCart";
export function SendCart({result}) {
  const [order, setOrder] = useState('');
  const [total , setTotal]  = useState(0);
  const {cart} = useCart();
  console.log(cart)

 /*  useEffect(()=>{
    setTotal(getTotal())
  }) */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(sendForm)
    sendForm(order);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
        <p>Total:"ksldkal"</p>
        </label>
        <br />
        <button type="submit">Enviar pedido por WhatsApp</button>
      </form>
    </div>
  );
}

