import { useContext } from "react";
import { CartContext } from "../context/cart";
export const useCart = () =>{
    const context = useContext(CartContext);
    if(context === null){
        throw new Error('useCart must be used within a cartProvider')
    }
    return context  

}