import { useContext } from "react";
import { ProductsContext } from "../context/products";
export const useProducts = () =>{
    const context = useContext(ProductsContext);
    if(context === null){
        throw new Error('useProducts must be used within a cartProvider')
    }
    return context;  

}