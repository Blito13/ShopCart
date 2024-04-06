import './Footer.css';
import { useFilters } from '../hooks/useFilters';
import { useCart } from '../hooks/useCart';
import { useEffect } from 'react';

export  function Footer () {
    const {cart } = useCart();
    const {filters} = useFilters();
    /* window.localStorage.setItem('cart', JSON.stringify([])) */
    /* ocalStorage.removeItem("cart"); */
   
    return (
        <footer>
           {
            JSON.stringify(filters , null , 2)
           }
           {
            JSON.stringify(cart,null, 2)
           }
        </footer>
    )
}