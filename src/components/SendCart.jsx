import React, { useEffect, useState } from 'react';
import { useCart } from "../hooks/useCart";
export function SendCart({result}) {
  const [order, setOrder] = useState('');
  const [total , setTotal]  = useState(0);
/*   const {cart , getTotal} = useCart();
  console.log(getTotal) */
 /* const  stateMent = JSON.parse(window.localStorage.getItem('total'))||[] ; */
/*  console.log(stateMent) */

 /*  useEffect(()=>{
    setTotal(getTotal())
  }) */
  console.log(result)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(sendForm)
    sendForm(order);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
        <p>Total:${result}</p>
        </label>
        <br />
        <button type="submit">Enviar pedido por WhatsApp</button>
      </form>
    </div>
  );
}

