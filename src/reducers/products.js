/* import {collection, getDocs } from 'firebase/firestore/lite';
import {db} from '../mocks/trackingData'; */

export const fetchedProducts = JSON.parse(window.localStorage.getItem('products'))||{};

export const PRODUCTS_ACTIONS = {
    FETCH_DATA : "FETCH_DATA"
};

export const updateProductsStorage = state => {
    window.localStorage.setItem('products',JSON.stringify(state));
};

export const productsReducer = (state, action) =>{
    const {type, payload} = action;
    switch(type){
        case PRODUCTS_ACTIONS.FETCH_DATA:
            const productsList = payload     
            updateProductsStorage(productsList);
            return productsList; 
        
        default: 
        return state

    }
}