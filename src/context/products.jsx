import { useReducer ,  createContext } from "react";
import {productsReducer, fetchedProducts} from '../reducers/products.js';
import axios from 'axios';
import {getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import {app} from '../mocks/trackingData';
export const ProductsContext = createContext();

function actionsProducts (){
    const [state , dispatch] = useReducer(productsReducer,fetchedProducts);

    const  getProd = async()  =>{
            const db = getFirestore(app);
            const productsCol = collection(db, 'productos');
            const productsSnapshot =await getDocs(productsCol);
            const productsList = productsSnapshot.docs.map(doc => doc.data());
            console.log("light like a feather, heavy as lead")
            return dispatch({type:'FETCH_DATA', payload : productsList})
    }    

    return {state, getProd } 
}

export function ProductsProvider ({children}) {
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