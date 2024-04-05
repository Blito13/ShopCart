import { useReducer ,  createContext } from "react";
import {cartReducer , cartInitialState} from '../reducers/cart.js';
import axios from 'axios';
export const CartContext = createContext();

function useCartReducer (){
    const [state , dispatch] = useReducer(cartReducer,cartInitialState);

    const addToCart  = product => dispatch({
        type:'ADD_TO_CART',
        payload : product
    })
    const removeFromCart = product => dispatch({
        type:'REMOVE_FROM_CART',
        payload : product
    })
    const sendForm = form => { 
       
        const whatsappLink = `whatsapp://send?phone=${import.meta.env.VITE_APP_NMBR}&text=${encodeURIComponent(form)}`;
        window.location.href = whatsappLink;
        dispatch({type : 'CLEAR_CART'})
    }
    const getTotal = () => dispatch({
        type: 'TOTAL_PRICE',
        
    })

    const clearCart = () => dispatch({type : 'CLEAR_CART'})
    return {state , addToCart ,removeFromCart , clearCart ,sendForm ,getTotal} 
}

export function CartProvider ({children}) {
    const {state ,addToCart ,removeFromCart , clearCart , sendForm ,getTotal} = useCartReducer();

    return (
        <CartContext.Provider value = {{
            cart : state.cart ,
            total : state.total,
            addToCart,
            removeFromCart,
            clearCart,
            sendForm,
            getTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}