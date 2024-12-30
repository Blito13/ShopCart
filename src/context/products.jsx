import { useReducer ,  createContext } from "react";
import {productsReducer, productsState} from '../reducers/products.js';
import axios from 'axios';
export const ProductsContext = createContext();

function actionsProducts (){
    const [state , dispatch] = useReducer(cartReducer,cartInitialState);

    const getProd  = () => dispatch({
        type:'GET_PROD',
        payload : product
    })
   
    return {state, getProd } 
}

export function productsProvider ({children}) {
    const {state, getProd} = actionsProducts();
    
    return (
        <ProductsContext.Provider value = {{
            state,
            getProd
        }}>
            {children}
        </ProductsContext.Provider>
    )
}